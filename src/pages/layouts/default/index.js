import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Search from '~/components/Search';

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Wrapper>
                <Search placeholder="Pesquisar..." />
                {children}
            </Wrapper>
        </>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
        .isRequired,
};

export default DefaultLayout;
