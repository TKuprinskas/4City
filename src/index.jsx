import React, { StrictMode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import { theme } from 'styles/theme';

const GlobalStyle = createGlobalStyle`
*, ::after, ::before {
    box-sizing: border-box;
    margin: 0
}
body {
    height: 100%;
}
html {
    font-family: ${theme.fontFamily};
    height: 100%;
    overflow-y: scroll;
    display: block;
}
`;

export const wrapRootElement = ({ element }) => (
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {element}
        </ThemeProvider>
    </StrictMode>
);
