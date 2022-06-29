import React from 'react';
import { Typography, Image } from 'components';
import { FlexWrapper } from 'components/wrappers/FlexWrapper';
import { Link, ContactsWrapper } from './styles';

export const Footer = () => (
    <FlexWrapper
        backgroundColor="mintGreen"
        padding="0.75rem"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
    >
        <ContactsWrapper>
            <FlexWrapper alignItems="center" margin="1rem 2rem">
                <Link href="tel:+370 65860073">
                    <Typography type="body16" color="white">
                        +370 658 60073
                    </Typography>
                </Link>
            </FlexWrapper>
            <Image src="logo" alt="logo" width="100%" style={{ cursor: 'pointer' }} />
            <FlexWrapper alignItems="center" margin="0.5rem 2rem">
                <Link href="mailto:info@4city.lt">
                    <Typography type="body16" color="white">
                        info@4city.lt
                    </Typography>
                </Link>
            </FlexWrapper>
        </ContactsWrapper>
        <FlexWrapper flexDirection="column" justifyContent="center" alignItems="center">
            <Typography type="body16" color="white">
                © 2022 4City
            </Typography>
            <Typography type="body16" color="white">
                Visos teisės saugomos
            </Typography>
        </FlexWrapper>
    </FlexWrapper>
);
