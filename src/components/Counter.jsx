import React from "react";
import Button from "./Button";
import {useState} from "react";

const Counter = () =>{
    const[count, setCount] = useState(0);
    const increment = ()=>{
         setCount(count+1)
    };
    const decrement = ()=>{
        if(count!=0){
            setCount(count-1)
        }else{
            alert("0dan asagi olmasin")
        }        
    };

    return <div className="button">
        <Button onClick={increment} title="+" className="primary"/> 
        <p style={{marginTop:"30px", marginBottom: "30px"}}>{count}</p>
        <Button onClick={decrement} title="-" className="secondary"/> 
    </div>
};
export default Counter;