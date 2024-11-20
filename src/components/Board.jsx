import { useBoardStore } from '../store/board'
import { Square } from './Square';
import { useEffect } from 'react'

export function Board() {
    const turn = useBoardStore(state => state.turn)
    const board = useBoardStore(state => state.board)

    useEffect(() => {
        // Llamar a checkToBoard cada vez que el tablero o el turno cambien
        useBoardStore.getState().checkToBoard();
        useBoardStore.getState().updateCount();
    }, [board, turn]);

    return (
        <section className='board'>
        {
            board.map((_, index) => {
                return (
                    <Square key={index}
                        index={index} >
                        {board[index]}
                    </Square>
                )
            })
        }
    </section>
    )
}