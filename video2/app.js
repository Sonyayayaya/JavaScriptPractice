import { Grid } from './grid.js';
import { Tile } from './tile.js';

const gameBoard = document.querySelector('.game-board');

const grid = new Grid(gameBoard);

grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));

document.addEventListener('keydown', handleInput)

function handleInput(event) { //движения плашек
    switch (event.key) {
        case 'ArrowUp':
            if(!canMove(grid.groupedCellsByColumn)) return;
            moveUp();
            break;
        case 'ArrowDown':
            if(!canMove(grid.groupedCellsByReversedColumn)) return;
            moveDown();
            break;
        case 'ArrowLeft':
            if(!canMove(grid.groupedCellsByRow)) return;
            moveLeft();
            break;
        case 'ArrowRight':
            if(!canMove(grid.groupedCellsByReversedRow)) return;
            moveRight();
            break;
        default:
            return;
    }

    const newTile = new Tile(gameBoard);
    grid.getRandomEmptyCell().linkTile(newTile); // добавление новых плиток

    if  (grid.cells.some(cell => cell.isEmpty() && cell.linkedTile.value === 2048)) {
        alert('Победа');
        document.removeEventListener('keydown', handleInput);
        return;
    }
    
    if (!(canMove(grid.groupedCellsByColumn) || canMove(grid.groupedCellsByReversedColumn) || canMove(grid.groupedCellsByRow) || canMove(grid.groupedCellsByReversedRow))) {
        alert('Поражение');
        document.removeEventListener('keydown', handleInput);
        return;
    }
}



function moveUp() {
    slideTiles(grid.groupedCellsByColumn)
}

function moveDown() {
    slideTiles(grid.groupedCellsByReversedColumn) // когда мы опексаемся данные идут снизу вверх
}

function moveLeft() {
    slideTiles(grid.groupedCellsByRow)
}

function moveRight() {
    slideTiles(grid.groupedCellsByReversedRow)
}

function slideTiles(groupedCells) { // будет вызывать slideTielsInGroup для каждой колонки
    groupedCells.forEach(group => slideTilesInGroup(group));
    grid.cells.forEach(cell => cell.linkedTileForMerge && cell.mergeTiles()) // возвращает послений истинный элемент
}

function slideTilesInGroup(group) { // проитись циклом по каждой ячейке в колонке
    for (let i = 1; i < group.length; i++) {
        if (group[i].isEmpty()) {
            continue;
        }

        const cellWithTile = group[i]; // ячейка с плиткой
        let targetCell; // ячейка где будет плитка
        let j = i - 1; // счётчик индекс ячейки выше рассматриваемой

        while (j >= 0 && group[j].canAccept(cellWithTile.linkedTile)) { //если мы в колонке и если ячейка может принять текущую плитку
            targetCell = group[j];
            j--;
        }

        if (!targetCell) { // если ячейка не модет принять плитку
            continue;
        }

        if (targetCell,isEmpty()) {
            targetCell.linkTile(cellWithTile.linkedTile)
        } else {
            targetCell.linkTileForMerge(cellWithTile.linkedTile)

            cellWithTile.unlinkTile() // открепляем перемещенную плитку от ячейки
        }
    }
}

function canMove(groupedCells) {
    return groupedCells.some(group => canMoveInGroup(group));
}

function canMoveInGroup() {
    return group.some((cell, index) => {
        if(!index) return false;
        if(cell.isEmpty()) return false;
        const targetCell = group[index-1];
        return targetCell.canAccept(cell.linkedTile);
    })
}