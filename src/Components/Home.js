import React, { useEffect, useState } from "react";
import "./Home.scss";
import Row from "./Row";
import axios from "axios";
import { Link } from "react-router-dom";
import {BiPlay} from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";

// const Card = ({img}) => (

//     <img src={img} alt="cover"/>

// )

// const Row = ({title}) => (

//     <div>
//       <h2>{title}</h2>

//       <Card img={"https://cdn.wionews.com/sites/default/files/2023/06/14/359315-the-flash-1.png?im=FitAndFill=(1200,900)"}/>
//     </div>

// )

const apiKey = "2b34c94b69cc3cae0dbce038e50c55e5";
const url = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p/original";

const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [allGenre, setAllGenre] = useState([]);

  useEffect(() => {
    const fetchUpcomingData = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);

      setUpcomingMovies(results);
    };
    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);

      setNowPlayingMovies(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);

      setPopularMovies(results);
    };
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);

      setTopRatedMovies(results);
    };
    const fetchAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);

      setAllGenre(genres);
    };

    fetchUpcomingData();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
    fetchAllGenre();
  }, []);

  return (
    <selection className="home">
      <div
        className="banner"
        style={{
          backgroundImage: upcomingMovies[0]
            ? `url(${`${imageUrl}/${upcomingMovies[0].poster_path}`} )`
            : "black",
        }}
      >
        {upcomingMovies[0] && <h1>{upcomingMovies[0].original_title}</h1>}
        {upcomingMovies[0] && <p>{upcomingMovies[0].overview}</p>}
      
        <div>
        <button> <BiPlay/> Play </button>
        <button>My List <AiOutlinePlus/></button>
        </div>
     
        </div>

      <Row title={"Upcoming"} array={upcomingMovies} />
      <Row title={"Now playing"} array={nowPlayingMovies} />
      <Row title={"Popular"} array={popularMovies} />
      <Row title={"Top Rated"} array={topRatedMovies} />

      <div className="genreBox">
        {allGenre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </selection>
  );
};

export default Home;
