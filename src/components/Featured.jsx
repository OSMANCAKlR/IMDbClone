import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Featured() {
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPosters() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=b361eac269c6fa0e8314d430f2779f8e"
    );
    const posters = response.data.results;
    setPosters(posters);
    setLoading(false);
  }

  useEffect(() => {
    fetchPosters();
  }, []);

  console.log(posters)

  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <h2 className="featured__title">What to watch</h2>
          <div className="featured__subtitle--wrapper">
            <div className="line"></div>
            <h3 className="featured__subtitle">Top picks</h3>
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </div>
          <p className="featured__para">TV shows and movies just for you</p>
          <div className="movie__row">
            <div className="row__wrapper">
            {loading ? (
            <p>Loading...</p>
          ) : (
            <Slide easing="ease" slidesToShow={6} slidesToScroll={6} autoplay={false}>
              {posters.map((poster) => (
                <div className="poster__container">
                  <img
                    className="movie__row--img"
                    src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`}
                    alt=""
                  />
                  <div className="p_description-wrapper">
                    <div className="rating">
                    <FontAwesomeIcon icon="fa-solid fa-star" /> <span>{poster.vote_average.toFixed(1)}</span>
                    </div>
                    <p className="poster__title">{poster.title}</p>
                    <button className="movie__row--button">+ Watchlist</button>
                  </div>
                </div>
              ))}
              </Slide>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
