import React from 'react';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet-async';
import { Typography, Header } from 'components';
import { useQuery } from 'styles/breakpoints';
import video from 'assets/video/video.mp4';
import { HeroCover, About, HeroTitle } from './styles';

const Home = () => {
    const { isTablet } = useQuery();
    const handleClick = () => {
        navigate('/app/quiz');
    };

    return (
        <>
            <Helmet>
                <title>Titulinis</title>
            </Helmet>
            <Header />
            <HeroCover>
                <video autoPlay loop muted playsInline>
                    <source type="video/mp4" src={video} />
                </video>
                <HeroTitle>
                    <Typography
                        type="h1"
                        color="white"
                        style={{ fontSize: '5vw', lineHeight: '1.2', letterSpacing: '3vw' }}
                    >
                        4City
                    </Typography>
                    <Typography
                        type="h2"
                        color="white"
                        style={{ fontSize: '3vw', lineHeight: '1.2', letterSpacing: '2vw' }}
                    >
                        KURIAME JUMS NAMUS
                    </Typography>
                </HeroTitle>
            </HeroCover>
        </>
    );
};

export default Home;
