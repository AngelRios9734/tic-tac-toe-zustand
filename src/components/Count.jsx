import { useBoardStore } from "../store/board"
import { TURNS } from '../constants/constants'

export function Count() {
    const countX = useBoardStore(state => state.countX)
    const countO = useBoardStore(state => state.countO)

    return (
        <>
            <section className="container-count">
                <span className="count">{`${TURNS.X}${countX}`}</span>
                <span className="count">{`${TURNS.O}${countO}`}</span>
            </section>
        </>
    )

}