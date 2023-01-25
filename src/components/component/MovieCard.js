import React from "react";
import MovieControls from "./MovieControls";
import Cards from "../card/card"

const MovieCard = ({ movie, type }) => {
  return (
    <div >    
      <Cards movie={movie} />
     <center><MovieControls movie={movie} type={type} /></center>
    </div>
  );
};

export default MovieCard;
