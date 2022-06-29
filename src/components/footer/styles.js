import styled from 'styled-components';
import { theme } from 'styles/theme';
import { tablet } from 'styles/breakpoints';

export const Link = styled.a`
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        text-decoration-color: ${theme.colors.white};
    }
`;

export const ContactsWrapper = styled.div`
    display: flex;
    margin: 0.5rem 0;
    flex-direction: row;
    border-bottom: 1px solid ${theme.colors.white};
    align-items: center;
    @media ${tablet} {
        flex-direction: column;
    }
`;
