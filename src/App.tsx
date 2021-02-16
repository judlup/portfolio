import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          <Route exac path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
