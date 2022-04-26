import React from "react";
import { Link } from "react-router-dom";

class Films extends React.Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    const res = await fetch("https://ghibliapi.herokuapp.com/films");
    const FilmsData = await res.json();
    this.setState({ films: FilmsData });
  }

  render() {
    return (
      <div>
        {this.state.films.map((film) => (
          <div key={film.id}>
            <Link to={`/films/${film.id}`}>{film.title}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Films;
