import React from "react";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

import "./styles.css";
import { IMovie } from "../Results";

interface IVideoCardProps {
  movie: IMovie;
}

const BASE_URL = "https://image.tmdb.org/t/p/original/";

const VideoCard: React.FC<IVideoCardProps> = ({ movie }) => {
  return (
    <div className="videoCard">
      <img
        src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title}
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} •`}
        {movie.release_date || movie.first_air_date} •

        <ThumbUpSharp /> {' '}
        {movie.vote_count}
      </p>
    </div>
  );
};

export default VideoCard;
