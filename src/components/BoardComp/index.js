import { boxes, data2 } from "../../constant";
import { useEffect, useState } from "react";
import circle_icon from "../../assets/images/circle.png"
import x_icon from "../../assets/images/cross.png"
import { random } from "../../helpers/random";

export default function BoardComp() {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let [name, setName] = useState('');
    let [data, setData] = useState(data2);

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
            // console.log('test 2');
            e.target.innerHTML = `<img src=${x_icon} />`;
            // gán gtri cho ptu trong mảng:
            if (data[num] === '') {
                data[num] = 'x';
                setCount(count+=1)
            }
            checkWin(data, 'x');
        }
    }

    useEffect(() => {
        const box = document.querySelectorAll(".box")
        let empty = []
        for (let i = 0; i < box.length; i++) {
            const item = box[i].children
            if (item.length === 0) {
                empty.push(box[i])
            }
        }
        const putComputerAt = index => {
            let newData = data;
            const abc = empty.find(item => parseInt(item.id) === index + 1) 
            if (abc) {
                newData[index] = 'o';
                setData(newData);
                abc.innerHTML =  `<img src=${circle_icon} />`;
                checkWin(data, 'o');
            }
            else {
                const emptyIndex = random(empty.length);
                if (empty.length !== 0) {
                    empty[emptyIndex].innerHTML = `<img src=${circle_icon} />`;
                    const emptyItem = empty.find(item => item.id === empty[emptyIndex].id)
                    const indexDataEmpty = newData.findIndex((_, index) => index === emptyItem.id - 1);
                    newData[indexDataEmpty] = 'o';
                    setData(newData);
                    checkWin(data, 'o');
                }
                else alert('het game, please restart')
            }
        }
        if (!lock) {
            if (count % 2 !== 0) {
                setTimeout(() => {
                    putComputerAt(random(empty.length));
                }, 500)
                setCount(count+=1)
            }
        }
    }, [count])

    const win = (winnerName) => {
        setName(winnerName)
        setLock(true)
    }

    const handleRestart = () => {
        for (let i = 0; i < data.length; i++) {
            data[i] = '';
        }
        setName('')
        const box = document.querySelectorAll('.box');
        for (let i = 0; i < box.length; i++) {
            box[i].innerHTML = ''
        }
        setLock(false);
        setCount(0);
    }

    return (
        <>
            <div className="name">
                <h2 className="game-name">TicTacToe by <span>NTA</span> </h2>
                <span className="mode">1 player mode</span>
                {name && <h3 className="winner-name">Winner is: <span>{name}</span></h3>}
            </div>
            <div className="board">
                {boxes && boxes.map((_, index) => <div className="box" key={index + 1} id={index + 1} onClick={(e) => {handleClick(e,index)}}></div>)}
            </div>
            <div className="actions" style={{display: "block", textAlign: "center"}}>
                <div className="restart-btn">
                    <button className="restart-btn__button" onClick={handleRestart}>Restart</button>
                    <span className="restart-btn__note">Note(*): <i>Please click Restart after finishing playing</i> </span>
                </div>
            </div>
        </>
    )
}