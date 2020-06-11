import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Container } from './styles';

const LinkWrapper = ({ to, text }) => {
    return (
        <>
            <Container>
                <Link to={`/${to}`}>
                    {text}
                    <MdArrowForward />
                </Link>
            </Container>
        </>
    );
};

LinkWrapper.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default LinkWrapper;
