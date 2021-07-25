import React from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import styled from 'styled-components';


const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
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
            <LogoImg src={RMDBLogo.svg} />
            <TMDBLogoImg src={TMDBLogo.svg} />
        </Content>
    </Wrapper>
);

export default Header;
