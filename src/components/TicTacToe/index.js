import "../../scss/style.scss";
import Board from "../Board";
import Name from "../Name";

export default function TicTacToe() {
    return (
        <>
            <div className="container">
                <Name />
                <div className="main-game">
                    <Board />
                </div>
            </div>
        </>
    )
}