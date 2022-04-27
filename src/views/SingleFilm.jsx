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

    return (
      <div style={{ backgroundColor: "cyan", color: "#FF69B4", fontFamily: "Comic Sans MS" }}>
        <h1>{this.state.film.title}</h1>
        <div>Released in {this.state.film.release_date}</div>
        <div>Directed by {this.state.film.director}</div>
        <div>{this.state.film.description}</div>
      </div>
    );
  }
}

export default withRouter(SingleFilm);
