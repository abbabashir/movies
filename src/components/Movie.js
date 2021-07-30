import React from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import BreadCumb from './BreadCumb';
import Grid from './Grid';
import Spinner from './Spinner';
import { useMovieFetch } from '../hooks/useMovieFetch';
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Spinner />
    if (error) return <div>Oops something went wrong...</div>
    return (
        <>
            <BreadCumb movieTitle={movie.original_title} />
        </>
    )
}

export default Movie;