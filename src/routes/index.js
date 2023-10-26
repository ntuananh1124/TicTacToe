import TicTacToe from "../components/TicTacToe";
import Home from "../pages/Home";

// const isMultiplayer = true;

export const routes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: "2-players",
        element: <TicTacToe />
    }
]