import React from 'react';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet-async';
import { Box, Typography, Header, Image, Button, Footer } from 'components';
import { useQuery } from 'styles/breakpoints';
import video from 'assets/video/video.mp4';
import * as S from './styles/styles';
import { paslaugos } from 'constants/paslaugos';
import { BsArrowRight } from 'react-icons/bs';
import HomeCarousel from 'components/carousels/homeCarousel';

const Home = () => {
    const { isTablet } = useQuery();

    return (
        <>
            <Helmet>
                <title>Titulinis | 4City</title>
            </Helmet>
            <Header />
            <S.HeroCover>
                <S.Video autoPlay loop muted playsInline>
                    <source type="video/mp4" src={video} />
                </S.Video>
                <S.HeroTitle>
                    <Typography
                        type="h2"
                        color="white"
                        fontSize={isTablet ? '5vw' : '2vw'}
                        style={{ lineHeight: '1.2', letterSpacing: '2vw' }}
                    >
                        KURIAME JUMS NAMUS
                    </Typography>
                    <Typography
                        type="body16"
                        color="white"
                        fontSize={isTablet ? '3vw' : '1vw'}
                        style={{ marginTop: '3rem', fontStyle: 'italic' }}
                    >
                        Kas ilgai mąsto, ne visada randa geriausią sprendimą – H. Manas
                    </Typography>
                </S.HeroTitle>
            </S.HeroCover>
            <S.Main>
                <S.Wrapper>
                    <Typography type="h3" color="black" style={{ marginTop: '2rem' }}>
                        Mūsų teikiamos paslaugos
                    </Typography>
                    <S.PaslaugosList>
                        {paslaugos.map(({ id, title, img }) => (
                            <S.PaslaugosItem key={id}>
                                <Image src={img} alt={title} />
                                <Typography
                                    type="h5"
                                    color="black"
                                    style={{ marginTop: '0.5rem' }}
                                    fontSize={isTablet ? '3vw' : ''}
                                >
                                    {title}
                                </Typography>
                            </S.PaslaugosItem>
                        ))}
                    </S.PaslaugosList>
                    <S.More>
                        <Button
                            borderRadius="2rem"
                            color="mintGreen"
                            padding="0.75rem"
                            backgroundColorHover="white"
                            margin="1rem 0 2rem 0"
                        >
                            Sužinokite daugiau <BsArrowRight size={20} style={{ verticalAlign: 'middle' }} />
                        </Button>
                    </S.More>
                </S.Wrapper>
                <S.Wrapper>
                    <Typography type="h3" color="black">
                        Mūsų projektai
                    </Typography>
                    <S.CarouselWrapper>
                        <HomeCarousel />
                    </S.CarouselWrapper>
                    <S.More>
                        <Button
                            borderRadius="2rem"
                            color="mintGreen"
                            padding="0.75rem"
                            backgroundColorHover="white"
                            margin="0 0 2rem 0"
                        >
                            Sužinokite daugiau <BsArrowRight size={20} style={{ verticalAlign: 'middle' }} />
                        </Button>
                    </S.More>
                </S.Wrapper>
                <S.Wrapper>
                    <Typography type="h3" color="black">
                        Apie mus
                    </Typography>
                    <S.About>
                        <Box width={isTablet ? '100%' : '65%'}>
                            <Typography type="body16" color="black" style={{ fontStyle: 'italic' }}>
                                4City - jauna, ambicinga ir gerają patirtį sukaupusi nekilnojamojo turto plėtros ir
                                statybos įmonė Lietuvoje. Sėkmingai plėtojanti gyvenamųjų, komercinių, visuomeninių ir
                                kitos paskirties pastatų projektus. Modernius ir kokybiškus sprendimus įmonė yra
                                pasiruošusi pasiūlyti savo klientams. Domėjimasis naujausiomis technologijomis ir
                                dėmesys klientų poreikiams leidžia įmonei Litlitas plėtoti pažangius, komfortiškus ir
                                energiškai efektyvius gyvenamųjų, komercinių, visuomeninių ir kitos paskirties pastatų
                                projektus.
                            </Typography>
                        </Box>
                        <Box width={isTablet ? '70%' : '35%'} margin={isTablet ? '1rem 0 0 0' : '0 0 0 2rem'}>
                            <Image src="apiemus" alt="apie mus" width="100%" />
                        </Box>
                    </S.About>
                    <S.More>
                        <Button
                            borderRadius="2rem"
                            color="mintGreen"
                            padding="0.75rem"
                            backgroundColorHover="white"
                            margin="0 0 2rem 0"
                        >
                            Sužinokite daugiau <BsArrowRight size={20} style={{ verticalAlign: 'middle' }} />
                        </Button>
                    </S.More>
                </S.Wrapper>
            </S.Main>
            <Footer />
        </>
    );
};

export default Home;
