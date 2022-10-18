import axios from "axios"
import React, { useEffect, useState, } from "react"
import { useHistory } from "react-router-dom"

const Login = () => {
    let history = useHistory();
    const [listAccount, setListAccount] = useState();
    useEffect(async () => {
        let data = await axios.get("api/account");

        setListAccount(data.data)
    }, [])
    // console.log("show data: ", listAccount)
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleChangeUserName = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleOnclickLogin = () => {
        console.log("list account: ", listAccount)
        console.log("username: ", username, " password: ", password)
        let check = false;
        listAccount.map((account) => {
            if (account.username === username && account.password === password) {
                check = true;
            }
        })
        if (check === true) {
            history.push("/home")
        } else {
            alert("Login fail")
        }
    }

    return (
        <>
            <div className="container">
                <label><b>Username</b></label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(event) => handleChangeUserName(event)}
                />

                <label><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => handleChangePassword(event)}
                />
                <button type="button" onClick={() => handleOnclickLogin()}>Login</button>
            </div>
        </>
    )
}

export default Login