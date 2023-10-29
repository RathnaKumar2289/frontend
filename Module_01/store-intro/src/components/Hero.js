
import { useSelector } from "react-redux";


function Hero(){
  console.log("Hero Rendered");
   const counter = useSelector((state)=>state);
    return (
        <div className="Hero">
            <h1>Hero</h1>
            <p>Counter: {counter}</p>
        </div>
    );
}

export default Hero;