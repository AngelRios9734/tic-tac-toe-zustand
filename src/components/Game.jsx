
import { useBoardStore } from '../store/board'
import { WinnerModals } from './WinnerModals'
import { Square } from './Square';
import { TURNS } from '../constants/constants'
import { Board } from './Board'
import { Count } from './Count';

export function Game() {
    const turn = useBoardStore(state => state.turn)
    const resetGame = useBoardStore(state => state.resetGame);
    const resetCount = useBoardStore(state => state.resetCount);
    const changeTurn = useBoardStore(state => state.changeTurn)

    return (
        <>
            <main className='game'>
                <h1>Tic Tac Toe</h1>
                <Count />
                <Board />
            </main>
            <footer>
                <section className='turn'>
                    <Square isSelected={turn === TURNS.X}>{TURNS.X} </Square>
                    <Square isSelected={turn === TURNS.O}>{TURNS.O} </Square>
                </section>
                <button className='btn reset' onClick={() => {resetGame(), resetCount()}}>Reset Game</button>
                <button className='btn' onClick={changeTurn} >Change turn</button>
            </footer>
            <WinnerModals />
        </>
    )

} 