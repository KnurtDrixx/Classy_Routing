import React from "react";
import { withRouter } from "react-router-dom";

class SingleFilm extends React.Component {
  state = {
    film: null,
  };

  async componentDidMount() {
    const res = await fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.singlefilm);
    const FilmData = await res.json();
    this.setState({ film: FilmData });
  }

  render() {
    if (!this.state.film) return <div>Still Loading Film {this.props.match.params.singlefilm}</div>;

    return <h1>{this.state.film.title}</h1>;
  }
}

export default withRouter(SingleFilm);
