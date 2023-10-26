import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./GoBack.scss"

export default function GoBack() {
    return (
        <>
            <Link to="/">
                <button className="go-back-btn">
                    <AiOutlineArrowLeft />
                    <span>Back</span>
                </button>
            </Link>
        </>
    )
}