import React, { useEffect, useState } from 'react'
import './RowPost.css'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'

function RowPost() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`)
        .then((res)=> {
            console.log(res.data.results)
            setMovies(res.data.results)
        }

        )
    }, [])
    return (
        <div className="row">
            <h2>Title</h2>
            <div className="posters">

                {movies.map((obj)=>
                    <img className="poster" src={` ${imageUrl + obj.backdrop_path}`} alt="POsters" />
                )}
                
               
           
           
           
            </div>

        </div>
    )
}

export default RowPost
