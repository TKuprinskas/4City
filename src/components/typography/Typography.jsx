import React from 'react';
import styled from 'styled-components/macro';
import { compose, fontWeight, lineHeight, textAlign, textStyle, typography, fontFamily } from 'styled-system';

import { applyTextType } from './TypographyHelpers';

const typographyProperties = compose(textAlign, fontWeight, fontFamily, lineHeight, textStyle, typography);

export const Typography = ({ type = 'body16', children, margin, ...props }) => {
    return (
        <Text type={type} {...props}>
            {children}
        </Text>
    );
};

const Text = styled.p`
    padding: ${({ padding }) => (padding ? padding : '0')};
    ${({ type, theme }) => type && applyTextType(type, theme)};
    color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.black)};
    font-family: ${({ theme, fontFamily }) => (fontFamily ? fontFamily : theme.fontFamily)};
    font-style: ${({ theme, fontStyle }) => (fontStyle ? fontStyle : theme.fontStyles)};
    margin: ${({ margin }) => (margin ? margin : '0')};
    z-index: 1;

    && {
        ${typographyProperties}
    }
    text-transform: ${({ textTransform }) => textTransform || ''};
    text-decoration: ${({ textDecoration }) => textDecoration || ''};
    text-align: ${({ textAlign }) => textAlign || ''};
`;
