import styled from 'styled-components';
import { theme } from 'styles/theme';
import { Link } from 'gatsby';

export const HeaderWrapper = styled.header`
    display: block;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: ${theme.colors.white};
    transition: all 0.5s ease;
    transform: translateZ(0);
`;

export const StyledLink = styled(Link)`
    color: ${theme.colors.black};
    font-family: ${theme.fontFamily};
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.fw400};
    position: relative;
    text-decoration: none;
    &:hover {
        color: ${theme.colors.mintGreen};
        font-weight: ${theme.fontWeights.fw700};
        border-bottom: 1px solid ${theme.colors.mintGreen};
    }
`;
