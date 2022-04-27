import React from "react";
import { Link } from "react-router-dom";

class Films extends React.Component {
  state = {
    films: [],
  };

  randomColor = () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
  };

  async componentDidMount() {
    const res = await fetch("https://ghibliapi.herokuapp.com/films");
    const FilmsData = await res.json();
    this.setState({ films: FilmsData });
  }

  render() {
    return (
      <>
        <div>
          {this.state.films.map((film) => (
            <marquee behavior="alternate" scrollamount="13" key={film.id} style={{ backgroundColor: this.randomColor() }}>
              <Link to={`/films/${film.id}`}>{film.title}</Link>
            </marquee>
          ))}
        </div>
        <footer>
          <marquee behavior="alternate" scrollamount="25" style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>👀</span>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>Ervin</span>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>Howell</span>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>Loves</span>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>watching</span>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>Studio</span>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>Ghibli</span>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>Movies</span>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>👀</span>
          </marquee>
        </footer>
      </>
    );
  }
}

export default Films;
