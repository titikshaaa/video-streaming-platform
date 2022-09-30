import React from "react";
import logo from "../../logo.png";
import { Link } from 'react-router-dom';
import {ImSearch} from 'react-icons/im';

const Home = () => {
    return ( 
        <nav className="header">
            <img src={logo} alt="logo" />
            <div>
                <Link to="/tvshows">TV Shows</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/recents">Recently Added</Link>
                <Link to="/mylist">My List</Link>
            </div>

            <ImSearch></ImSearch>
        </nav>
     );
}
 
export default Home;