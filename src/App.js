import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import LoginComponent from './Components/LoginComponent';
import DashBoard from './Components/Dashboard';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <DashBoard/>
        </Route>
        <Route exact path="/login">
          <LoginComponent />
        </Route>
        
        <Route path='*'><Redirect to='/'/></Route>
      </Switch>
    </Router>
  );
}

export default App;
