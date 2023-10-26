import "../../scss/style.scss";
import Board from "../Board";
import Name from "../Name";
import GoBack from "../GoBack";

export default function TicTacToe() {
    return (
        <>
            <GoBack />
            <div className="container">
                <Name />
                <div className="main-game">
                    <Board />
                </div>
            </div>
        </>
    )
}