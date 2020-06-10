import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { embedRequest } from '~/store/modules/video/actions';

import { Container } from './styles';

const Video = ({ thumbnail, title, description, id }) => {
    const dispatch = useDispatch();

    const handleEmbed = () => {
        dispatch(embedRequest(id));
    };

    return (
        <>
            <Container>
                <div>
                    <img src={thumbnail} alt="Thumbnail" />
                </div>
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
                <button onClick={handleEmbed} type="button">
                    Detalhes
                </button>
            </Container>
        </>
    );
};

Video.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Video;
