import React, { useEffect, useState } from 'react';
import { useInterval } from '../../hooks/useInterval';
import './Board.css';

export interface IBoardProps {
    size: number;
    interval?: number;
}

export interface IBoardState {
    boardState: boolean[][];
}

const initialBoard: boolean[][] = [[false, false, false], [false, false, false], [false, false, false, false, true, true, true]]

function Board(props: IBoardProps) {
    const [generation, setGeneration] = useState<boolean[][]>(initialBoard);

    useInterval(() => {
        const newGeneration = calculateGeneration(generation);
        setGeneration(newGeneration);
    }, props.interval);

    useEffect(() => {
        // eslint-disable-next-line
        const newState = generateBoard(generation, props.size);
        setGeneration(newState);
    }, [props.size]);

    const board = generation.map((row, rowIndex) => {
        const columns = row.map((column, columnIndex) => <td key={columnIndex} className={`${column ? 'alive' : ''}`}></td>)
        return <tr key={rowIndex}>{columns}</tr>
    });

    return (
        <table cellSpacing="0" cellPadding="0">
            <tbody>
                {board}
            </tbody>
        </table>
    );
}

export function calculateGeneration(previousGeneration: boolean[][]): boolean[][] {

    let newGeneration: boolean[][] = JSON.parse(JSON.stringify(previousGeneration))

    for (let i = 0; i < previousGeneration.length; i++) {
        for (let j = 0; j < previousGeneration[i].length; j++) {
            newGeneration[i][j] = isAlive(previousGeneration, i, j)
        }
    }

    return newGeneration;
}

export function isAlive(generation: boolean[][], x: number, y: number): boolean {
    let isAlive = false;
    const neighbours = getNeighbours(generation, x, y);
    const aliveNeighbours = neighbours.filter(x => x);

    // is alive 
    if (generation[x][y]) {
        isAlive = aliveNeighbours.length === 2 || aliveNeighbours.length === 3;
    } else {
        isAlive = aliveNeighbours.length === 3;
    }
    return isAlive;
}

export function getNeighbours(generation: boolean[][], x: number, y: number): boolean[] {

    const neighbours = [];
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (x !== (x + i) || y !== (y + j)) {
                if (generation[x + i]) {
                    neighbours.push(generation[x + i][y + j]);
                }
            }
        }
    }
    return neighbours;
}

export function generateBoard(initialGeneration: boolean[][], newSize: number): boolean[][] {

    const newGeneration = Array.from({ length: newSize }, (_, _i) => Array.from({ length: newSize }, (_v, _j) => false));

    for (let i = 0; i < newGeneration.length; i++) {
        for (let j = 0; j < newGeneration[i].length; j++)
            if (initialGeneration[i] && initialGeneration[i][j]) {
                newGeneration[i][j] = initialGeneration[i][j];
            }
    }

    return newGeneration;
}

export default Board;
