import styled from 'styled-components/macro';
import { borderRadius, color, compose, position } from 'styled-system';

import { mobile, tablet } from 'styles/breakpoints';

const containerProps = compose(borderRadius, color, position);

export const Container = styled.div`
    margin: 0 auto;
    max-width: 80%;
    padding: 1rem;

    && {
        ${containerProps};
    }

    @media ${mobile} {
        max-width: 100%;
    }

    @media ${tablet} {
        max-width: 100%;
    }
`;
