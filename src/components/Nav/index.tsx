import React from 'react';

import './styles.css';
import requests from '../../services/requests';

interface INavProps {
  setSelectedOption: (option: string) => void;
}

const Nav: React.FC<INavProps> = ({setSelectedOption}) => {
  return (
      <div className="nav">
          <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Tendências</h2>
          <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>Mais Votados</h2>
          <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Ação</h2>
          <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comédia</h2>
          <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Teror</h2>
          <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
          <h2 onClick={() => setSelectedOption(requests.fetchMistery)}>Mistério</h2>
          <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-fi</h2>
          <h2 onClick={() => setSelectedOption(requests.fetchWestern)}>Ocidental</h2>
          <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>Animação</h2>
          <h2 onClick={() => setSelectedOption(requests.fetchTV)}>Filme</h2>
      </div>
  );
}

export default Nav;
