import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components";
import { HomePage, AboutPage, EventsPage, GamesPage } from "./pages";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/events" exact component={EventsPage} />
        <Route path="/games" exact component={GamesPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
