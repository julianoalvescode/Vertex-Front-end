import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import colors from '~/styles/settings';
import Utils from '~/utils/conversorNumber';

import { pageTransitions, pageVariants } from './animations';
import { Container } from './styles';

const EmbedYoutube = ({ link, title, vizu, like, dislike, description }) => {
    return (
        <>
            <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransitions}
            >
                <Container>
                    <div className="back">
                        <Link to="/">
                            <MdArrowBack />
                            Voltar
                        </Link>
                    </div>
                    <div className="iframe-container">
                        <iframe
                            src={`https://www.youtube.com/embed/${link}`}
                            allowFullScreen
                            title="Youtube Embed"
                        />
                    </div>
                    <h3 className="iframe-title">{title}</h3>
                    <div className="iframe-info">
                        <h4 className="iframe-vizu">
                            {Utils.convertDecimal(vizu)} vizualizações
                        </h4>
                        <div className="iframe-buttons">
                            <button type="button">
                                <AiFillLike size="26" color={colors.grey} />
                                {Utils.convertDecimal(like)}
                            </button>
                            <button type="button">
                                <AiFillDislike size="26" />
                                {Utils.convertDecimal(dislike)}
                            </button>
                        </div>
                    </div>
                    <div className="iframe-description">
                        <p>{description}</p>
                    </div>
                </Container>
            </motion.div>
        </>
    );
};

EmbedYoutube.propTypes = {
    link: PropTypes.string.isRequired,
    like: PropTypes.string.isRequired,
    vizu: PropTypes.string.isRequired,
    dislike: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default EmbedYoutube;
