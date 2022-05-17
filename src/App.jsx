import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, } from "react-router-dom"
import Checkout from './Checkout/Checkout';
import { Switch } from 'react-router-dom';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path= "/login">
            <Login />
          </Route>

            <Route path='/checkout'>
              <Header />
              <Checkout />
            </Route>

            <Route path='/'>
              <Header />
              <Home />
            </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
