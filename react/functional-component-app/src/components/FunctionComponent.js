import React, { useEffect, useState } from "react";
import { FunctionalButton } from './FunctionalButton';
export function FunctionComponent(props){
    // i designate a state variable called num set to 0 and using the setNum function as a setstate
    const [num, setNum] = useState(0);
    function incrementNum() {
        setNum(num+1);
    };
    useEffect(()=> {
        alert("use effect called!");
    });
    return(<div>
        
        <h1>{num}</h1>
        <FunctionalButton incrementNum={incrementNum}></FunctionalButton>
    </div>);
}