import React ,{useState} from "react";

function Navbar(){
    return <header className = "Navbar">Facebook</header>
}

function Button({name}){
    const [name,setName] = useState("Click me");
    return <button>{name}</button>;
}
export default Navbar;
