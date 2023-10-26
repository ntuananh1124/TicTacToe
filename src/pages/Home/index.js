import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <div className="select-mode">
                <h2 className="select-mode__game-name">TicTacToe by <span>NTA</span></h2>
                <h1 className="select-mode__name">SELECT MODE</h1>
                <div className="select-mode__n-player">
                    <Link to="/1-player">
                        <button className="select-mode__btn">1 player</button>
                    </Link>
                    <Link to="/2-players">
                        <button className="select-mode__btn">2 players</button>
                    </Link>
                </div>
            </div>
        </>
    )
}