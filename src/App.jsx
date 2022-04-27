import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Films from "./views/Films";
import SingleFilm from "./views/SingleFilm";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/films" component={Films} />

          <Route exact path="/films/:singlefilm" component={SingleFilm} />
        </Switch>
      </div>
    );
  }
}

export default App;
