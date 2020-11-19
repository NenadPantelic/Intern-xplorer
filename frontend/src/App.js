import "./App.css";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Dashboard} />  
        <Route path="/login" component={LoginForm} />     
      </div>
    </Router>
  );
}

export default App;
