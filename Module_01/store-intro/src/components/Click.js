import { useDispatch } from "react-redux";

function Click(){
    const dispatch = useDispatch();
    const handleClick = function(){
        dispatch({type:"INCREMENT"});
    }
    const handleClick5 = function(){
        dispatch({type:"INCREMENT",payload: 5});
    }
    const handleClickDes5 = function(){
        dispatch({type:"DECREMENT",payload: 5});
    }
    const handleClickDes = function(){
        dispatch({type:"DECREMENT"});
    }
    return (
        <div>
            <button onClick={handleClick}>+1</button>
            <button onClick={handleClick5}>+5</button>
            <button onClick={handleClickDes5}>-5</button>
            <button onClick={handleClickDes}>-1</button>
        </div>
    );
}

export default Click;