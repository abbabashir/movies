import React from 'react';
import { Link } from 'react-router-dom';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import styled from 'styled-components';


const Wrapper = styled.div`
  background-color: #003366;
  padding: 0 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280;
  padding: 20px 0;
  margin: 0 auto;
`;

const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;


const Header = () => (
    <Wrapper>
        <Content>
          <Link to='/'>
            <LogoImg src={RMDBLogo} />
          </Link> 
            <TMDBLogoImg src={TMDBLogo} />
        </Content>
    </Wrapper>
);

export default Header;
