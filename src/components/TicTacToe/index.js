import "../../scss/style.scss";
import Board from "../Board";
import BoardComp from "../BoardComp";
import GoBack from "../GoBack";

export default function TicTacToe({isMultiplayer}) {
    // console.log(isMultiplayer ? "2 players mode" : "1 player mode");
    return (
        <>
            <GoBack />
            <div className="container">
                <div className="main-game">
                    {isMultiplayer ? <Board isMultiplayer={isMultiplayer} /> : <BoardComp />}
                </div>
            </div>
        </>
    )
}