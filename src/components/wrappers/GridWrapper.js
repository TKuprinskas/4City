import styled from 'styled-components/macro';
import {
    compose,
    gridArea,
    gridColumn,
    gridRow,
    gridTemplateAreas,
    gridTemplateColumns,
    gridTemplateRows,
    gridAutoColumns,
    gridAutoFlow,
    gridAutoRows,
    grid,
    gridGap,
    gridColumnGap,
    gridRowGap,
} from 'styled-system';
import { Box } from './Box';

const gridProps = compose(
    gridArea,
    gridColumn,
    gridRow,
    gridTemplateAreas,
    gridTemplateColumns,
    gridTemplateRows,
    gridAutoColumns,
    gridAutoFlow,
    gridAutoRows,
    grid,
    gridGap,
    gridColumnGap,
    gridRowGap
);

export const GridWrapper = styled(Box)`
    display: grid;

    && {
        ${gridProps};
    }
`;
