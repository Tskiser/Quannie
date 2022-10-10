const LoginPage = () => {
  return (
    <div>
      <div className="Login">
        <h1>Login</h1>
        <p>
          Username <input type="text" placeholder="Enter username" />
        </p>
        <p>
          Password <input type="password" placeholder="Enter password" />
        </p>
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};
export default LoginPage;
