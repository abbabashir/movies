import React, { useState, useEffect } from 'react';
import API from '../API';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import NoImage from '../images/no_image.jpg';


const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}



const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    //Initial Search
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);
    return (
        <>
            {state.results[0] ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            ) : null}
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header="Popular Movies">
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieID={movie.id}
                    />
                ))}
            </Grid>
            <Spinner/>
        </>
    );
};

export default Home;