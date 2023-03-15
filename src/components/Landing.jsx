import axios from "axios";
import React, { useEffect, useState } from "react";

function Landing() {
  const [posters, setPosters] = useState([]);

  async function fetchPosters() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=b361eac269c6fa0e8314d430f2779f8e"
    );
    const posters = response.data.results;
    setPosters(posters);
  }

  useEffect(() => {
    fetchPosters();
  }, []);

  console.log(posters);

  return (
    <>
      {posters.slice(0, 4).map((poster) => (
        <div className="container">
          <div className="row">{poster.title}</div>
            <img src={`https://image.tmdb.org/t/p/w500${
          poster.backdrop_path || poster.poster_path
        }`} alt="" />
        </div>
      ))}
    </>
  );
}

export default Landing;
