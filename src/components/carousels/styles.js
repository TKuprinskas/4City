import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { theme } from 'styles/theme';

export const StyledCarousel = styled(Carousel)`
    width: 100%;
    img {
        width: 100%;
        height: 100%;
        border-radius: 3rem;
    }
    .dot.selected {
        border: 1px solid ${theme.colors.mintGreen};
    }
`;
