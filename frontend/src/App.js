import "./App.css";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Dashboard} />  
        <Route path="/login" component={LoginForm} />     
        <Route path="/signup" component={SignupForm} />     
      </div>
    </Router>
  );
}

export default App;
