import React from 'react';

import LoadGif from '~/assets/gif/loader.gif';
import { Container } from './styles';

const LoadScreen = () => {
    return (
        <>
            <Container>
                <img src={LoadGif} alt="Load gif" />
            </Container>
        </>
    );
};

export default LoadScreen;
