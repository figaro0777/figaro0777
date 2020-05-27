import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Header from "./components/Header/Header";
import {Products, Authorized, Homepage, Gallery, Feedback, About } from "./Pages";

function App() {
  return (
      <div className="App">
        <Router>
          <Header />

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/products" component={Products} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/about" component={About} />
            <Route path="/authorized" component={Authorized} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
