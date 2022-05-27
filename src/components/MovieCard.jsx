import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
const MovieCard = ({ movie }) => {
  const imageUrl =  getMovieImg( movie.poster_path,300);
  return (
    <li className={styles.Card}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />

        <div>{movie.title}</div>
      </Link>
    </li>
  );
};

export default MovieCard;
