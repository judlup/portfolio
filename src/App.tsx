import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Experience from "./Pages/Experience/Experience";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/experience" component={Experience} />
          <Route exac path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
