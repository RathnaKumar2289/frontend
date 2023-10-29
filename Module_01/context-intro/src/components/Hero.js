import { useContext } from "react";
import { CounterContext } from "../App";


function Hero(){
    const {counter} = useContext(CounterContext);
    return (
        <div className="Hero">
            <h1>Hero</h1>
            <p>{counter}</p>
        </div>
    );
}

export default Hero;