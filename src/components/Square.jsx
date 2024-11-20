import { useBoardStore } from "../store/board"

export function Square({children, index, isSelected}) {
    const updateBoard = useBoardStore(state => state.updateBoard)
    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className} index={index}>
            {children}
        </div>
    )
}