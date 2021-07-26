import styled from 'styled-components';

export const Wrapper = styled.div`
background: linear-gradient(
    to bottom, rgba(0,0,0,0)
    41%, rgba(0,0,0,0.65)
    100%
),
url(${({ image }) => image});
background-size: 100%, cover;
background-position: center;
height: 600px;
position: relative;
animation: animationHeroImage 1s;

@keyframes animationHeroImage {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
`;

export const Content = styled.div`
padding: 20px;
max-width: 1280;
margin: 0 auto;
`;

export const Text = styled.div`
z-index: 100;
max-width: 700px;
position: absolute;
bottom: 40px;
margin-right: 20px;
margin-height: 100px;
color: #fff;

h1{
    font-size: 2.5rem;

    @media screen and (max-width: 720){
        font-size: 1.5rem;
    }

    p{
        font-size: 1.2rem;

        @media screen and (max-width: 720px){
            font-size: 1rem;
        }
    }
}

@media screen and (max-width: 720px){
    max-width: 100%;
}
`;