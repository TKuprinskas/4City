import React from 'react';
import styled from 'styled-components/macro';
import LazyLoad from 'react-lazyload';
import { smMobile } from 'styles/breakpoints';
import { visuals } from 'utils/visuals';
import { Box } from 'components';

const Img = styled.img`
    max-width: ${({ maxWidth }) => maxWidth || ''};
    width: ${({ width }) => width || ''};
    height: ${({ height }) => height || ''};
    margin: ${({ margin }) => margin || ''};
    padding: ${({ padding }) => padding || ''};
    border: ${({ border }) => border || ''};
    max-height: ${({ maxHeight }) => maxHeight || ''};
    position: ${({ position }) => position || ''};
    border-radius: ${({ borderRadius }) => borderRadius || ''};
    transform: ${({ transform }) => transform || ''};
`;

export const Image = ({ src, mobile_src, onClick, alt, boxAlign, ...rest }) => (
    <LazyLoad>
        <picture onClick={onClick}>
            <Box>
                {mobile_src && <source media={smMobile} srcSet={visuals[mobile_src]} />}
                <Img src={visuals[src]} alt={alt} {...rest} />
            </Box>
        </picture>
    </LazyLoad>
);
