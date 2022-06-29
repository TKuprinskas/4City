import React from 'react';
import styled from 'styled-components/macro';
import { Box, Typography } from 'components';

export const InputComponent = ({
    label,
    type,
    placeholder,
    error,
    min,
    max,
    onChange,
    margin,
    border,
    padding,
    color,
    ...props
}) => (
    <>
        {label && (
            <label htmlFor={props.id}>
                <Typography type="body16" color="black" fontFamily="base">
                    {label}
                </Typography>
            </label>
        )}
        <StyledInput
            as="input"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            color={color}
            border={border}
            margin={margin}
            min={min}
            max={max}
            {...props}
        />
    </>
);

const StyledInput = styled(Box)`
    padding: ${({ padding }) => (padding ? padding : '1rem')};
    width: ${({ width }) => (width ? width : '100%')};
`;
