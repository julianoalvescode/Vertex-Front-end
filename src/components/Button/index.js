import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function DefaultButton({ name }) {
    return (
        <>
            <Container>
                <button data-cy="submit" type="submit">
                    <MdSearch size="16" color="#fff" />
                    {name}
                </button>
            </Container>
        </>
    );
}

DefaultButton.propTypes = {
    name: PropTypes.string.isRequired,
};
