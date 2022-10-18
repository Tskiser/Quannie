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
    alert("submited")
    let check = false;
    accountList.map((account) => { return (account.username === username && account.password === password) }
    )
    if (check === true) {
      //do something
    } else {
      alert("Login fail")
    }
  }



  return (
    <React.Fragment>
      <div className="logincontainer">
        <div class="center">
          <h1>Sign in</h1>
          <form className="login-form">
            <div class="txt_field">
              <input className="login-inputs" type="text" name="email"
                value={username}
                onChange={(event1) => handleChangeUserName(event1)}
                required />
              <span></span>
              <label>Username</label>
            </div>
            <div class="txt_field">
              <input className="login-inputs" type="password" name="password"
                value={password}
                onChange={(event2) => handleChangePassword(event2)}
                required />
              <span></span>
              <label>Password</label>
            </div>
            <button className="submit-login" onClick={handleLogin}>Log in</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginPage