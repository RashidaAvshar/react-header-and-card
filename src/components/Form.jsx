import {useState} from "react";
import Button from "./Button";

const Form = () =>{

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = (e) => {
        setUserName(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const senData = ()=>{
        const data = {
            userName,
            password
        }
        console.log(data)
    }

    return <div className="form-box">
        <h1>LOGIN</h1>
        <input type="text" placeholder="name"  onChange={handleChangeUsername} />
        <input type="password" placeholder="password" onChange={handleChangePassword}/>
        <Button title="login" onClick={senData}/>

    </div>
}

export default Form;