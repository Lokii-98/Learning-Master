import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Logo from "./Components/Logo/logo";
import NavigationBar from "./Components/Navbar/nav";
import MainRouter from "./Routes";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavigationBar />
            <Logo />

          </header>
          <div className="app-container">
            <MainRouter />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
