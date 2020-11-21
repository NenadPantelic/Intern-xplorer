import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import NewJob from "./pages/NewJob";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Home from "./pages/Home";
import JobDetail from './pages/JobDetail'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/job-posts/:id" component={JobDetail} />
      <AuthenticatedRoute path="/post-job" component={NewJob} />
    </Router>
  );
}

export default App;
