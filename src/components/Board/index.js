import { boxes, data } from "../../constant";
import { useState } from "react";
import circle_icon from "../../assets/images/circle.png"
import x_icon from "../../assets/images/cross.png"
import { changeName } from "../../actions/name";
import { useDispatch } from "react-redux";

export default function Board() {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    const dispatch = useDispatch();
    let [turn, setTurn] = useState('x');

    const checkWin = (a, winner) => {
        if (a[0] === a[1] && a[1] === a[2] && a[2] !== '') {
            win(winner);
        }
        else if (a[0] === a[3] && a[3] === a[6] && a[6] !== '') {
            win(winner);
        }
        else if (a[0] === a[4] && a[4] === a[8] && a[8] !== '') {
            win(winner);
        }
        else if (a[1] === a[4] && a[4] === a[7] && a[7] !== '') {
            win(winner);
        }
        else if (a[2] === a[5] && a[5] === a[8] && a[8] !== '') {
            win(winner);
        }
        else if (a[2] === a[4] && a[4] === a[6] && a[6] !== '') {
            win(winner);
        }
        else if (a[3] === a[4] && a[4] === a[5] && a[5] !== '') {
            win(winner);
        }
        else if (a[6] === a[7] && a[7] === a[8] && a[8] !== '') {
            win(winner);
        }
    }

    const handleClick = (e,num) => {
        if (lock) { 
            return 0; // if lock = true => k cho thuc hien cau lenh o duoi
        }

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src=${x_icon} />`;
            // gán gtri cho ptu trong mảng:
            if (data[num] === '') {
                data[num] = 'x';
                setCount(count+=1)
            }
            checkWin(data, 'x');
            setTurn('o')
        }
        else {
            e.target.innerHTML = `<img src=${circle_icon} />`;
            // gán gtri cho ptu trong mảng:
            if (data[num] === '') {
                data[num] = 'o';
                setCount(count+=1)
            }
            checkWin(data, 'o')
            setTurn('x')
        }
    }

    const win = (winnerName) => {
        dispatch(changeName(winnerName))
        setLock(true)
    }

    const handleRestart = () => {
        for (let i = 0; i < data.length; i++) {
            data[i] = '';
        }
        dispatch(changeName(''));
        const box = document.querySelectorAll('.box');
        for (let i = 0; i < box.length; i++) {
            box[i].innerHTML = ''
        }
        setLock(false);
        setCount(0);
        setTurn('x');
    }

    return (
        <>
            <div className="board">
                {boxes && boxes.map((_, index) => <div className="box" key={index + 1} id={index + 1} onClick={(e) => {handleClick(e,index)}}></div>)}
            </div>
            <div className="actions">
                {turn && 
                <div className="turn">
                    Turn: <span>{turn}</span>
                </div>}
                <div className="restart-btn">
                    <button className="restart-btn__button" onClick={handleRestart}>Restart</button>
                </div>
            </div>
        </>
    )
}