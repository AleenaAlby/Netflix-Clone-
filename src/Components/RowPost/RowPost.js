import React, { useEffect, useState } from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlid,setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url)
        .then((res)=> {
            console.log(res.data.results)
            setMovies(res.data.results)
        }

        )
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleMovie =(id) =>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(response =>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }
        })
    }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">

                {movies.map((obj)=>
                    <img onClick={() =>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={` ${imageUrl + obj.backdrop_path}`} alt="POsters" />
                )}
                
            </div>
            { urlid  && <YouTube videoId={urlid.key} opts={opts} />}
        </div>

        
    )
}

export default RowPost
