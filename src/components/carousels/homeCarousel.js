import React from 'react';
import { StyledCarousel } from './styles';
import { Image } from 'components';

const HomeCarousel = () => (
    <StyledCarousel autoPlay infiniteLoop="true">
        <div>
            <Image src="img1" alt="img1" />
        </div>
        <div>
            <Image src="img2" alt="img2" />
        </div>
        <div>
            <Image src="img3" alt="img3" />
        </div>
        <div>
            <Image src="img4" alt="img4" />
        </div>
        <div>
            <Image src="img5" alt="img5" />
        </div>
        <div>
            <Image src="img6" alt="img6" />
        </div>
    </StyledCarousel>
);

export default HomeCarousel;
