import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";

function MovieInfo() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movie } = useParams();

  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?t=${movie}&apikey=ca13a1bc`
    );
    setMovies([data]);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, [movie]);

  console.log(movies);

  return (
    <section id="movie__info">
      <div className="container">
        <div className="row">
          <h1 className="movieinfo__title">Search "{movie}"</h1>
          <div>
            <div className="featured__subtitle--wrapper">
              <div className="line"></div>
              <h3 className="featured__subtitle">Titles</h3>
            </div>
            {movies.length > 0 && (
              <div className="movie__list--wrapper">
                {movies.map((movie) => (
                  <div className="movie__wrapper" key={movie.imdbID}>
                    <div className="movie__image">
                    <img className="movie__poster--img" src={movie.Poster} alt="" />
                    </div>
                    <div className="movie__description--wrapper">
                    <p className="movie__title">{movie.Title}</p>
                    <Rating rating={movie.imdbRating} />
                    <p className="movie__year">{movie.Year} </p>
                    <p className="movie__plot">{movie.Plot}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MovieInfo;



