import styled from 'styled-components/macro';
import { visuals } from 'utils/visuals';
import { mobile, tablet } from 'styles/breakpoints';

export const SectionWrapper = styled.section`
    position: relative;
    padding: ${({ padding }) => (padding ? padding : '24px')};
    min-height: ${({ minHeight }) => minHeight || ''};
    border-bottom: ${({ borderBottom }) => borderBottom || ''};
    background-color: ${({ theme, backgroundColor }) => (backgroundColor ? theme.colors[backgroundColor] : '')};
    background-image: ${({ backgroundImage }) => (backgroundImage ? `url(${visuals[backgroundImage]})` : '')};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    text-align: ${({ textAlign }) => textAlign || ''};

    @media ${mobile} {
        padding: 32px;
    }

    @media ${tablet} {
        padding: 48px;
    }
`;
