import TicTacToe from "../components/TicTacToe";
import Home from "../pages/Home";

const isMultiplayer = true;

export const routes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: "2-players",
        element: <TicTacToe isMultiplayer={isMultiplayer} />
    },
    {
        path: "1-player",
        element: <TicTacToe isMultiplayer={!isMultiplayer} />
    }
]