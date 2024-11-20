import { useBoardStore } from "../store/board";
import { Square } from "../components/Square"

export function WinnerModals() {
    const winner = useBoardStore(state => state.winner);
    const tie = useBoardStore(state => state.tie);
    const resetGame = useBoardStore(state => state.resetGame);
    if (winner === null && !tie) return null

    const text = winner ? `El ganador es` : null;
    const content = tie ? 'Empate' : null


    return (
        <>
            <section className="winner">
                <div className="msg">
                    <header>
                        <p>{text}</p>
                    </header>
                    {
                        winner
                            ? <h2 className="win"><Square>{winner}</Square></h2>
                            : content
                    }
                    <footer>
                        <button className="btn play-again" onClick={resetGame}>Play again</button>
                    </footer>
                </div>
            </section>

        </>
    );
}
