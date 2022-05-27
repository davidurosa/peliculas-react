import placeholder from "../placeholder.jpg"

export function getMovieImg(path,tamano){
    return path ? "https://image.tmdb.org/t/p/w"+tamano + path:placeholder;

}