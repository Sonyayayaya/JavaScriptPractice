import { Cell } from './cell.js'

const GRID_SIZE = 4; // кол-во элементов в строке
const GRID_COUNT = GRID_SIZE * GRID_SIZE; //кол-во элементов всего

export class Grid {
    constructor(gridElement) {
        this.cells = [];
        for (let i = 0; i < GRID_COUNT; i++) {
            this.cells.push(new Cell(gridElement, i % GRID_SIZE, Math.floor(i / GRID_SIZE))) // добавляем в ячейку новую ячеёку
        }

        this.groupedCellsByColumn = this.groupedCellsByColumn();
        this.cellsGroupedReversedColumn = this.groupedCellsByColumn.map(column => [...column].reverse()) // чтобы не изменять исходный массив создаём новый массив через парт-оператор и только после этого разворачиваем
        this.groupedCellsByRow = this.groupedCellsByRow();
        this.groupedCellsByReversedRow = this.groupedCellsByRow.map(row => [...row].reverse());
    }

    getRandomEmptyCell() {
        const emptyCells = this.cells.filter(cell => cell.isEmpty()); // фильтруем пустые
        const randomIndex = Math.floor(Math.random() * emptyCells.length); //генерируем индекс с округлением

        return emptyCells(randomIndex);
    }

    groupedCellsByColumn() {
        return this.cells.reduse((groupedCell, cell) => {
            groupedCell[cell.x] = groupedCell[cell.x] || [];
            groupedCell[cell.x][cell.y] = cell // присваиваем ячейкам свои значения
            return this.groupedCells;
        }, []); // в исходные значения массив
    }

    groupedCellsByRow() { // просто меняем х и у местами
        return this.cells.reduse((groupedCell, cell) => {
            groupedCell[cell.y] = groupedCell[cell.y] || [];
            groupedCell[cell.y][cell.x] = cell // присваиваем ячейкам свои значения
            return this.groupedCells;
        }, []); // в исходные значения массив
    }
}