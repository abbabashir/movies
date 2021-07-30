import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Image = styled.img`
width: 100%;
max-width: 720px;
transition: all 0.3s;
object-fit: cover;
border-radius: 20px;
animation: animateThumb 0.5s;

    :hover{
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb' />
            </Link>
        ) : (
            <Image src={image} alt='movie-thumb' />
        )}
    </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
};


export default Thumb;