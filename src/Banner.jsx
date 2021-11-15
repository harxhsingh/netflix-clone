import React, {useState, useEffect} from "react";
import axios from '../src/axios';
import './Banner.css';
import requests from "../src/Requests";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return requests
        }
        fetchData()
    },[])

    console.log(movie)

    function truncated(string,nums) {
        return string?.length > nums ? string.substr(0,nums-1)+ '...':string ;
    }

    return (
        <header className='banner' style={{
            backgroundSize:'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            // backgroundPosition:'center center',
        }}>
            <div className='banner__contents'>
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons"></div>
                <button className="banner__button"> ▶ Play</button>
                <button className="banner__button"> My List</button>
                <h1 className="banner__description">{truncated(movie?.overview,200)}</h1>

            </div>   
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner

