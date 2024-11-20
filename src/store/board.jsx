import { create } from "zustand";
import { TURNS } from "../constants/constants";

export const useBoardStore = create((set, get) => {
    return {
        board: Array(9).fill(null),
        turn: TURNS.X,
        winner: null,
        tie: false,
        countX: 0,
        countO: 0,

        updateBoard: (index) => {
            const board = get().board
            const turn = get().turn
            const winner = get().winner
            if (board[index] !== null || winner) return

            const newBoard = board.slice()
            newBoard[index] = turn

            const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
            set({ board: newBoard, turn: newTurn })

        },

        checkToBoard: () => {
            const board = get().board
            const combinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ]

            let isDraw = true

            for (const el of combinations) {
                const [a, b, c] = el
                if (board[a] !== null &&
                    board[a] === board[b] &&
                    board[b] === board[c]
                ) {
                    set({ winner: board[a], tie: false })
                    return// Salir del bucle porque encontramos un ganador
                }
            }
            // Si no hay ganador, verificar si hay casillas vacías
            for (let i = 0; i < board.length; i++) {
                if (board[i] === null) {
                    isDraw = false// Todavía hay casillas vacías, no hay empate
                    break // Salir del bucle porque encontramos una casilla vacía
                }
            }
            // Si no hay ganador y no hay casillas vacías, es un empate
            if (isDraw) {
                set({ winner: null, tie: true })
            }

        },

        changeTurn: () => {
            const turn = get().turn
            const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

            set({ turn: newTurn })
        },

        resetGame: () => {
            set({
                board: Array(9).fill(null),
                turn: TURNS.X,
                winner: null,
                tie: false,
            })
        },

        resetCount: () => {
            set({
                countX: 0,
                countO: 0,
            })
        },

        updateCount: () => {
            const winner = get().winner
            set(state => ({
                countX: winner === TURNS.X ? state.countX + 1 : state.countX,
                countO: winner === TURNS.O ? state.countO + 1 : state.countO,
            }));
        },
    }
})