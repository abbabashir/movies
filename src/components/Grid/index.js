import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
max-width: 1280;
margin: 0 auto;
padding: 0 20px;

h1{
    color: #000;

    @media screen and (min-width: 768px){
        font-size: 1.5rem;
    }
}
`;

const Content = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 2rem;
`;

const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

export default Grid;