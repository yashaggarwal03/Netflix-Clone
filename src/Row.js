import React, { useState, useEffect } from "react";
import "./Row.css";

import axios from "./axios";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  //  A Snippet of Code which runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  // console.table(movies);

  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="row_posters">
        {/* several row poster(s) */}

        {movies.map((movie) => (
          <img
            className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            src={`${baseUrl}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
