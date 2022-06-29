import React from 'react';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet-async';
import { Typography, Header } from 'components';
import { useQuery } from 'styles/breakpoints';
import video from 'assets/video/video.mp4';
import { HeroCover, Video, HeroTitle, About } from './styles';

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
                <Video autoPlay loop muted playsInline>
                    <source type="video/mp4" src={video} />
                </Video>
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
            <About>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit. Id eveniet provident
                    voluptatem alias sapiente. Quia incidunt ducimus amet dolores reiciendis quibusdam repudiandae. Quam
                    nemo numquam fugiat neque totam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit. Id eveniet provident
                    voluptatem alias sapiente. Quia incidunt ducimus amet dolores reiciendis quibusdam repudiandae. Quam
                    nemo numquam fugiat neque totam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit. Id eveniet provident
                    voluptatem alias sapiente. Quia incidunt ducimus amet dolores reiciendis quibusdam repudiandae. Quam
                    nemo numquam fugiat neque totam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit. Id eveniet provident
                    voluptatem alias sapiente. Quia incidunt ducimus amet dolores reiciendis quibusdam repudiandae. Quam
                    nemo numquam fugiat neque totam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit. Id eveniet provident
                    voluptatem alias sapiente. Quia incidunt ducimus amet dolores reiciendis quibusdam repudiandae. Quam
                    nemo numquam fugiat neque totam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit. Id eveniet provident
                    voluptatem alias sapiente. Quia incidunt ducimus amet dolores reiciendis quibusdam repudiandae. Quam
                    nemo numquam fugiat neque totam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit. Id eveniet provident
                    voluptatem alias sapiente. Quia incidunt ducimus amet dolores reiciendis quibusdam repudiandae. Quam
                    nemo numquam fugiat neque totam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit. Id eveniet provident
                    voluptatem alias sapiente. Quia incidunt ducimus amet dolores reiciendis quibusdam repudiandae. Quam
                    nemo numquam fugiat neque totam.
                </p>
            </About>
        </>
    );
};

export default Home;
