import { useSelector } from "react-redux"
import "../../scss/style.scss"

export default function Name() {
    const name = useSelector(state => state.changeName);
    // console.log(name);
    return (
        <>
            <div className="name">
                <h2 className="game-name">TicTacToe</h2>
                {name && <h3 className="winner-name">Winner is: <span>{name}</span></h3>}
            </div>
        </>
    )
}