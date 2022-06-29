import styled from 'styled-components/macro';
import { visuals } from 'utils/visuals';
import {
    compose,
    borderRadius,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    flexBasis,
    justifyContent,
    alignItems,
    alignContent,
    alignSelf,
} from 'styled-system';
import { Box } from './Box';

const flexProps = compose(
    borderRadius,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    flexBasis,
    justifyContent,
    alignItems,
    alignContent,
    alignSelf
);

export const FlexWrapper = styled(Box)`
    display: ${({ display }) => display || 'flex'};
    background-image: ${({ backgroundImage }) => (backgroundImage ? `url(${visuals[backgroundImage]})` : '')};
    background-repeat: ${({ backgroundRepeat }) => (backgroundRepeat ? backgroundRepeat : 'no-repeat')};
    background-position: ${({ backgroundPosition }) => (backgroundPosition ? backgroundPosition : 'center')};
    background-size: ${({ backgroundSize }) => (backgroundSize ? backgroundSize : 'cover')};

    && {
        ${flexProps};
    }
`;
