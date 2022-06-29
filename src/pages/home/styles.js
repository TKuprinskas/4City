import styled from 'styled-components';

export const HeroCover = styled.section`
    position: absolute;
    text-align: center;
    width: 100vw;
    height: 100vh;
    & video {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background: brown;
        object-fit: cover;
    }
`;

export const HeroTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`;
