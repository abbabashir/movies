import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Content = styled.div``;

const Grid = ({ header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

export default Grid;