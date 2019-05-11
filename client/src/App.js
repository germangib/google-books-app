import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import LandingPage from "./pages/LandingPage";
import "./App.css";


function App() {
  
    return (
      <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={LandingPage} /> 
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} /> 
            <Route exact path="*" component={LandingPage} />
          </Switch> 
          <Footer/>
      </Router>
    );
  }


export default App;
