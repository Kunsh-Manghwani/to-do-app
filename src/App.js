import React from 'react';
import {BrowserRouter, Switch ,Route, Link} from "react-router-dom";
import Home from "./routes/Home.js"
import Registry from "./routes/Registry"
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/registry">
          <Registry />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
