import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import FooterPage from "./components/FooterPage";
import Wrapper from "./components/Wrapper";
import Login from "./components/authLogin";
import Register from "./components/authRegister";

class App extends Component {

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Router>
      <div>
        <Hero />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Wrapper>
        <FooterPage />
      </div>
    </Router>
    )
  }
}

export default App;
