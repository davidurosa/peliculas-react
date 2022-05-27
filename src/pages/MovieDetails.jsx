import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import style from "./MovieDetails.module.css";
import { get } from "../utils/httpClient";
import Cagador from "../components/Cagador";
import { getMovieImg } from "../utils/getMovieImg";



const MovieDetails = () => {




  const {movieId} = useParams();

  const [movie, setMovie] = useState(null);

  const [isLoading,setIsLoading] = useState(true);




useEffect(()=>{
  setIsLoading(true);
  get("/movie/"+movieId).then(data=> {
    setIsLoading(false);
    setMovie(data);
  })
}, [movieId])


if(isLoading){
 return <Cagador/>
}

if(!movie){
  return null
}


const imageUrl =  getMovieImg( movie.poster_path,500);


  return (
    <div className={style.detailsContainer}>
      <img
        className={`${style.col} ${style.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${style.col} ${style.text}`}>
        <p className={style.firtText}>
          <strong>Titulo: </strong>
          {movie.title}
        </p>

        <p>
          <strong>Generos: </strong>
          {movie.genres.map((item) => item.name).join(", ")}
        </p>
        <p>
          <strong>Descripcion: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
