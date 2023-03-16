import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Landing() {
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

  return (
    <section id="slider">
      <div className="container">
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="landing__slider">
              <Slide easing="ease">
                {posters.slice(0, 4).map((poster) => (
                  <div className="poster__slider">
                    <img
                      className="backdrop__img"
                      src={`https://image.tmdb.org/t/p/w500${poster.backdrop_path}`}
                      alt={poster.title}
                    />
                    <div className="backdrop"></div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`}
                      className="poster__img"
                      alt=""
                    />
                    <div className="poster__description--wrapper">
                      <FontAwesomeIcon icon="fa-regular fa-circle-play" />
                      <div className="poster__description--container">
                        <h2 className="poster__title">{poster.title} </h2>
                        <p className="poster__para">{poster.overview}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
          )}
          <div className="upnext__wrapper">
            <h2 className="upnext__title">Up next</h2>
            <div className="upnext__poster--wrapper">
              {posters.slice(11, 14).map((poster) => (
                <div className="upnext__poster--row">
                  <img
                    className="upnext__img"
                    src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`}
                    alt=""
                  />
                  <div className="upnext__summary">
                    <div className="upnext__title--summary">
                  <FontAwesomeIcon className="upnext__button" icon="fa-regular fa-circle-play" /> <span className="upnext__date">{poster.release_date}</span>
                    </div>
                  <p>{poster.title}</p>
                  </div>
                </div>
              ))}
              <h1 className="upnext__trailer">Browse trailers </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
