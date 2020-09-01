import React, { useState, useEffect } from "react";

import "./styles.css";
import VideoCard from "../VideoCard";
import api from "../../services/api";
import FlipMovie from 'react-flip-move';

export interface IMovie {
  id: number;
  title: string;
  backdrop_path: string;
  vote_count: number;
  poster_path: string;
  overview: string;
  original_name: string;
  media_type: string;
  release_date: string;
  first_air_date: string;
}

interface IResultsProps {
  selectedOptions: string;
}

const Results: React.FC<IResultsProps> = ({ selectedOptions }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    async function getMovies() {
      const response = await api.get(selectedOptions);
      setMovies(response.data.results);
    }

    getMovies();
  }, [selectedOptions]);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Results;
