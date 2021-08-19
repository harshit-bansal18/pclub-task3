import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import LoginComponent from './Components/LoginComponent';
import DashBoard from './Components/Dashboard';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={<LoginComponent/>} />
        <Route exact path="/" component={<DashBoard/>} />
        <Route path='*'><Redirect to='/'/></Route>
      </Switch>
    </Router>
  );
}

export default App;
