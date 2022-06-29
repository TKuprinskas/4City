import styled from 'styled-components';

export const HeroCover = styled.section`
    height: 100vh;
`;

export const Video = styled.video`
    width: 100%;
    position: fixed;
    z-index: -1;
`;

export const HeroTitle = styled.div`
    position: relative;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const About = styled.div`
    position: relative;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: -200px;
    width: 50%;
    margin: 0 auto;
    background-color: #fff;
    overflow: scroll;
    p {
        color: black;
        font-size: 1.5rem;
    }
`;
