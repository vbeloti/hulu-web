import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

import "./styles.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon">
          <HomeIcon />
          <p>Home</p>
        </div>

        <div className="header__icon">
          <FlashOnIcon />
          <p>Tendências</p>
        </div>

        <div className="header__icon">
          <LiveTvIcon />
          <p>Verificados</p>
        </div>

        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Coleções</p>
        </div>

        <div className="header__icon">
          <SearchIcon />
          <p>Buscar</p>
        </div>
        
        <div className="header__icon">
          <PersonOutlineIcon />
          <p>Conta</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="Hulu Logo"
      />
    </div>
  );
};

export default Header;
