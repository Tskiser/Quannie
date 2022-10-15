import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import LoginPage from './components/LoginPage';
import CreateStaff from './views/CreateStaff';
import CreateCustomer from './views/CreateCustomer';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListStaff from './views/ListStaff';

function App() {
  return (

    <BrowserRouter>

      <Switch>

        <Route path="/home">
          <div className="App">
            {/* <Login /> */}
            <header className="App-header">
              <Home />
            </header>
          </div>
        </Route>
        {/* Create login form - Phong */}
        <Route path="/login-page">
          <LoginPage />
        </Route>
        {/* Create login form - Phong */}
        {/* Create staff account form - Nam */}
        <Route path="/create-staff">
          <CreateStaff />
        </Route>
        <Route path="/list-staff">
          <ListStaff />
        </Route>
        {/* Create login form - Nam */}
        {/* Create staff account form - Quan */}
        <Route path="/create-customer">
          <CreateCustomer />
        </Route>
        {/* Create login form - Quan */}
        <Route path="/">
          <LoginPage />
        </Route>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
