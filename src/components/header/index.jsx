import React from 'react';
import { Box, FlexWrapper, Image } from 'components';
import { FaFacebookF } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { useQuery } from 'styles/breakpoints';
import { HeaderWrapper, StyledLink } from './styles';

const menuItems = [
    {
        name: 'Projektai',
        link: '/projektai',
    },
    {
        name: 'Paslaugos',
        link: '/paslaugos',
    },
    {
        name: 'Apie Mus',
        link: '/apiemus',
    },
    {
        name: 'Kontaktai',
        link: '/kontaktai',
    },
];

const socialItems = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/4CityLithuania',
        icon: <FaFacebookF color="black" size={20} />,
    },
    {
        name: 'Email',
        link: 'mailto:info@4City.lt',
        icon: <MdOutlineEmail color="black" size={20} />,
    },
];

export const Header = () => {
    const { isTablet } = useQuery();
    return (
        <HeaderWrapper>
            <FlexWrapper width="80%" padding="1rem" flexDirection={{ _: 'row', mobile: 'column' }} margin="0 auto">
                {isTablet ? (
                    ''
                ) : (
                    <Box textAlign={'left'}>
                        <StyledLink to="/">
                            <Image src="logo" alt="logo" width="100%" style={{ cursor: 'pointer' }} />
                        </StyledLink>
                    </Box>
                )}
                <FlexWrapper
                    justifyContent="space-between"
                    width="30%"
                    margin="0 auto"
                    flexDirection={{ _: 'row', mobile: 'column' }}
                    alignItems="center"
                >
                    {menuItems.map((item) => {
                        const { name, link } = item;
                        return (
                            <Box key={name} marginTop={{ _: '0', mobile: '0.625rem' }}>
                                <StyledLink to={link}>{name}</StyledLink>
                            </Box>
                        );
                    })}
                </FlexWrapper>
                <FlexWrapper
                    width={{ _: '5%', mobile: '100%' }}
                    alignItems="center"
                    justifyContent="space-around"
                    marginTop={{ _: '0', mobile: '1.25rem' }}
                >
                    {socialItems.map((item) => {
                        const { name, link, icon } = item;
                        return (
                            <Box key={name}>
                                <a href={link}>{icon}</a>
                            </Box>
                        );
                    })}
                </FlexWrapper>
            </FlexWrapper>
        </HeaderWrapper>
    );
};
