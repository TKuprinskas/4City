import styled from 'styled-components/macro';
import {
    alignSelf,
    border,
    borderRadius,
    color,
    compose,
    display,
    justifyContent,
    layout,
    position,
    shadow,
    space,
    textAlign,
    zIndex,
} from 'styled-system';

export const boxProps = compose(
    alignSelf,
    borderRadius,
    space,
    color,
    display,
    position,
    zIndex,
    layout,
    border,
    shadow,
    textAlign,
    justifyContent
);

export const Box = styled.div`
    cursor: ${({ isCursorPointer }) => (isCursorPointer ? 'pointer' : 'default')};
    && {
        ${boxProps};
    }
`;
