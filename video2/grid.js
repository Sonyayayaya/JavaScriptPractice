import { Cell } from './cell.js'

const GRID_SIZE = 4; // кол-во элементов в строке
const GRID_COUNT = GRID_SIZE * GRID_SIZE; //кол-во элементов всего

export class Grid {
    constructor(gridElement) {
        this.cells = [];
        for (let i = 0; i < GRID_COUNT; i++) {
            this.cells.push(new Cell(gridElement, i % GRID_SIZE, Math.floor(i / GRID_SIZE))) // добавляем в ячейку новую ячеёку
        }
    }
}