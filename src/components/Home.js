import React, { useState, useEffect } from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASEURL } from '../config';

import NOIMage from '../images/no_image.jpg';

const Home = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    return <div>Home Page</div>
};

export default Home;