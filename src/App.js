import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer, Home, About, Contact } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
