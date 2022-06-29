import styled from 'styled-components';
import { theme } from 'styles/theme';
import { tablet } from 'styles/breakpoints';

export const HeroCover = styled.section`
    height: 100vh;
    background-color: ${theme.colors.blurry};
    @media ${tablet} {
        height: 280px;
    }
`;

export const Video = styled.video`
    width: 100%;
    position: fixed;
    z-index: -1;
    @media ${tablet} {
        height: 400px;
    }
`;

export const HeroTitle = styled.div`
    position: relative;
    width: 80%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    p:first-child {
        font-size: 2vw;
    }
    p:last-child {
        font-size: 0.75vw;
    }
    @media ${tablet} {
        width: 100%;
        height: 400px;
        p:first-child {
            font-size: 5vw;
        }
        p:last-child {
            font-size: 2vw;
        }
    }
`;

export const Main = styled.main`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
`;

export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    border-bottom: 1px solid ${theme.colors.mintGreen};
`;

export const PaslaugosList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    margin-top: 1rem;
`;

export const PaslaugosItem = styled.div`
    width: calc(25% - 1rem);
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-size: 1vw;
    }
    img {
        float: left;
        object-fit: cover;
        width: 200px;
        height: 200px;
        border-radius: 1rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
    }
    @media ${tablet} {
        width: calc(50% - 1rem);
        img {
            width: 120px;
            height: 120px;
        }
        p {
            font-size: 3vw;
        }
    }
`;

export const More = styled.div`
    display: flex;
    width: 15%;
    margin: 0 auto;
    @media ${tablet} {
        width: 60%;
    }
`;

export const CarouselWrapper = styled.div`
    width: 50%;
    margin: 2rem auto 0 auto;
    @media ${tablet} {
        width: 100%;
    }
`;

export const About = styled.div`
    width: 80%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    img {
        float: left;
        object-fit: cover;
        border-radius: 1rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
    }
    @media ${tablet} {
        width: 100%;
        flex-direction: column;
        align-items: center;
        text-align: justify;
    }
`;

export const ImgWrapper = styled.div`
    width: 35%;
    margin-left: 2rem;
    @media ${tablet} {
        width: 70%;
        margin-left: 0;
        margin-top: 2rem;
    }
`;

export const TextWrapper = styled.div`
    width: 65%;
    @media ${tablet} {
        width: 100%;
    }
`;
