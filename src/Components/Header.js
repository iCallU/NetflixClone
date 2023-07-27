import React from 'react';
import logo from "../logo.png";
import {Link} from "react-router-dom";
import {ImSearch} from "react-icons/im";

const Header = () => {
  return (
    <div>
      <nav className="header">
            
      <img src = {logo} alt="logo"/>
      <div>
        <Link to="Tvshows">Tv Shows</Link>
        <Link to="Movies">Movies</Link>
        <Link to="recentlyadded">Recently Added</Link>
        <Link to="Mylist">My List</Link>
      </div>
         
         <ImSearch/>
      </nav>
    </div>
  )
}

export default Header
