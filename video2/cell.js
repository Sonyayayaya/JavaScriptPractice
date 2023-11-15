export class Cell {

    x = 0;
    y = 0;
    linkedTile = null; // на ячейке плитки нет

    constructor(gridElement, x, y) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridElement.appendChild(cell);
        this.x = x;
        this.y = y;
    }

    linkTile(tile) {
        tile.setXY(this.x, this.y);
        this.linkedTile = tile; //вызываем поле
    }

    isEmpty() {
        return !this.linkedTile;
    }

    unlinkTile() { // открепляем плитку
        this.linkedTile = null;
    }

    linkTileForMerge(tile) {
        tile.setXY(this.x, this.y);
        this.linkedTileForMerge = tile; // добавление нового поля
    }

    canAccept(newTile) { // вернёт true если ячейка пустая или плитка не привязана
        return this.isEmpty() || (!this.linkedTileForMerge && this.linkedTile.value === newTile.value)
    }
    
    mergeTiles() {
        this.linkedTile.setValue(this.linkedTile.value + this.linkedTileForMerge.value) // проверки на существование элементов уже сделаны ранее
        this.linkedTileForMerge.tileElement.remove(); // удаляем ячейку
        this.linkedTileForMerge = null; // удаляем данные
    }

}