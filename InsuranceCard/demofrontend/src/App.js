import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        <Route path="/">
          <Login />
        </Route>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
