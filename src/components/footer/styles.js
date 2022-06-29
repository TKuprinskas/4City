import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Link = styled.a`
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        text-decoration-color: ${theme.colors.white};
    }
`;
