import React from 'react';
import styled from 'styled-components';

const Image = styled.img``;

const Thumb = ({image, movieId, clickable}) => (
    <div>
        <Image src={image} alt='movie-thumb'/>
    </div>
);

export default Thumb;