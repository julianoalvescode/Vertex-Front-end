import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Container } from './styles';

const LinkWrapper = ({ to, text }) => {
    return (
        <>
            <Container>
                <Link to={`/${to}`}>{text}</Link>
            </Container>
        </>
    );
};

LinkWrapper.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default LinkWrapper;
