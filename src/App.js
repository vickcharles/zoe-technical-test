import React from "react";
import Header from "./js/components/common/Header";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./js/components/views/HomePage";

function App() {
  return (
    <Router>
      <Header />
      <div className="app-content">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
