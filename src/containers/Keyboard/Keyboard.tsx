import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {deleteNumber, increase,checkPin} from "./keyboardSlice";
import './Keyboard.css'
import {useState} from "react";

const Keyboard = () => {
    const  keyboardInput = useSelector((state:RootState)=>state.keyboard.input)
    const isCorrect = useSelector((state: RootState) => state.keyboard.isCorrect);
    const showMessage = useSelector((state: RootState) => state.keyboard.showMessage);
    const dispatch = useDispatch();
    const [numbers] = useState([
        { number: "1" },
        { number: "2" },
        { number: "3" },
        { number: "4" },
        { number: "5" },
        { number: "6" },
        { number: "7" },
        { number: "8" },
        { number: "9" },
    ]);

    const removeNumber = () => {
        dispatch(deleteNumber());
    };

    const onCheckPin = () => {
        dispatch(checkPin());
    };

    return (
        <div className="screen-keyboard border border-secondary bg-dark p-2 pt-5 pb-5">
            <div
                className={`input-numbers mb-4  ${isCorrect === null ? 'bg-secondary' : isCorrect ? 'bg-success' : 'bg-danger'}`}>
                {keyboardInput.replace(/./g, '*')}
            </div>
            <div className="buttons">
                {numbers.map((num) => (
                    <button key={num.number} className="btn btn-secondary m-1 w-25"
                            onClick={() => dispatch(increase(num.number))}>
                        {num.number}
                    </button>
                ))}
                <button className="btn btn-warning m-1 w-25" onClick={removeNumber}>{'<'}</button>
                <button className="btn btn-secondary m-1 w-25" onClick={() => dispatch(increase('0'))}>0</button>
                <button className="btn btn-success m-1 w-25" onClick={onCheckPin}>E</button>
            </div>
            <div className="show-message mt-3">
                {showMessage ? (
                    <span className="text-light">{showMessage}</span>
                ) : (
                    <span className="text-light">Введите код чтобы войти</span>
                )}
            </div>
        </div>
    );
};

export default Keyboard;