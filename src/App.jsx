import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Films from "./views/Films";
import SingleFilm from "./views/SingleFilm";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/films" component={Films} />

          <Route exact path="/films/:singlefilm" component={SingleFilm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
