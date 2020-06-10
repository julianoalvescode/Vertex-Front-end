import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Link from '~/components/Link';
import { Container } from './styles';

const ListVideos = ({ children }) => {
    const active = useSelector((state) => state.video.success);
    return (
        <>
            {active ? <Link to="video" text="Vizualizar video ativo" /> : null}
            <Container>{children}</Container>
        </>
    );
};

ListVideos.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ListVideos;
