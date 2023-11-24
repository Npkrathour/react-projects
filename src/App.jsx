import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import About from "./pages/About";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={NoPage} />
      </Switch>
    </Router>
  );
};

export default App;
