import React, { useEffect, useState, } from "react"
import '../styles/login.scss'

const LoginPage = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [accountList, setAccountList] = useState([]);

  //get data(chua lam)



  const handleChangeUserName = (event) => {
    setUsername(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleLogin = () => {
    let check = false;
    accountList.map((account) =>
      {return (account.username === username && account.password === password)}
    )
    if (check === true) {
      //do something
    } else {
      alert("Login fail")
      setUsername('')
      setPassword('')
    }
  }



  return (
    <div>
      <div className="Login">
        <h1>Login</h1>
        <p>
          Username <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => handleChangeUserName(event)}
          />
        </p>
        <p>
          Password <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => handleChangePassword(event)}
          />
        </p>
        <button onClick={() => handleLogin()}>Login</button>
      </div>
    </div>
  );
};
export default LoginPage;
