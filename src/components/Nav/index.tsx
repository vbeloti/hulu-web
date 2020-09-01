import React from 'react';

import './styles.css';

const Nav: React.FC = () => {
  return (
      <div className="nav">
          <h2>Tendências</h2>
          <h2>Mais Votados</h2>
          <h2>Ação</h2>
          <h2>Comédia</h2>
          <h2>Teror</h2>
          <h2>Romance</h2>
          <h2>Mistério</h2>
          <h2>Sci-fi</h2>
          <h2>Ocidental</h2>
          <h2>Animação</h2>
          <h2>Filme</h2>
      </div>
  );
}

export default Nav;