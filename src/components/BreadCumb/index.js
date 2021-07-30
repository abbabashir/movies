import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div``;

export const Content = styled.div``;

const BreadCumb = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>~</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);

export default BreadCumb;