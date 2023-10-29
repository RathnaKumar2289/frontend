import Click from "./Click";
import Hero from "./Hero";

function Header(){
    console.log("Header Rendered");
return(
    <div className="Header">
        <Hero />
        <Click/>
    </div>
);
}

export default Header;