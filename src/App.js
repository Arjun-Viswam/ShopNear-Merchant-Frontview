import './App.css';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Home from './Pages/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/merchant' component={Home}>
        </Route>
        <Route path='/merchant/signup' component={Signup}>
        </Route>
        <Route path='/merchant/login' component={Login}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
