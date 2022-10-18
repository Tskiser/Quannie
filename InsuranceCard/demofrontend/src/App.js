import './App.css';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import CreateStaff from './views/CreateStaff';
import CreateCustomer from './views/CreateCustomer';
import ListStaff from './views/ListStaff';
import Listcontract from './views/StaffContractList';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContractDetail from './views/ContractDetail';


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
        {/* Contract List - Phong */}
        <Route path="/contract-list">
          <Listcontract />
        </Route>
        {/* Contract List - Phong */}


        {/* Create staff account form - Nam */}
        <Route path="/create-staff">
          <CreateStaff />
        </Route>
        <Route path="/list-staff">
          <ListStaff />
        </Route>
        <Route path="/contract-detail">
          <ContractDetail />
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
