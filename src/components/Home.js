import React, { useState, useEffect } from 'react';
import API from '../API';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import { useHomeFetch } from '../hooks/useHomeFetch';
import HeroImage from './HeroImage';
import NOIMage from '../images/no_image.jpg';

const Home = () => {
    const { state, loading, error } = useHomeFetch();
    console.log(state);

    return (
        <>
            {state.results[0] ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            ) : null}
        </>
    );
};

export default Home;