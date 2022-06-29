import styled from 'styled-components/macro';
import { borderRadius, border, color, compose, position, layout } from 'styled-system';

import { mobile, tablet } from 'styles/breakpoints';

const buttonProps = compose(border, borderRadius, color, position, layout);

export const Button = styled.button`
    display: block;
    padding: ${({ padding }) => (padding ? padding : '0.5rem 1rem')};
    width: 100%;
    font-weight: ${({ theme }) => theme.fontWeights.fw700};
    border-radius: ${({ theme, borderRadius }) => (borderRadius ? borderRadius : theme.radii.default)};
    border: ${({ border }) => (border ? border : 'none')};
    margin: ${({ margin }) => (margin ? margin : '0')};
    cursor: pointer;

    && {
        ${buttonProps};
    }

    &:hover {
        background-color: ${({ theme, backgroundColorHover }) =>
            backgroundColorHover ? backgroundColorHover : theme.colors.white};
        transition: all 0.2s ease-in-out;
        border: ${({ borderHover }) => (borderHover ? borderHover : 'none')};
        color: ${({ theme, colorHover }) => (colorHover ? colorHover : theme.colors.black)};
    }

    @media ${mobile} {
        max-width: 100%;
    }

    @media ${tablet} {
        max-width: 100%;
    }
`;
