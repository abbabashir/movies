import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    display: block;
    background: #003366;
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: #fff;
    border: 0;
    font-size: 1.5rem;
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }
`;


const Button = ({text, callback}) => (
    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
);

export default Button;