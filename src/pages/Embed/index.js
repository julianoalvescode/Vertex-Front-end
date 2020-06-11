import React from 'react';

import { useSelector } from 'react-redux';
import { Container } from './styles';

import EmbedYoutube from '~/components/EmbedYoutube';

const Embed = () => {
    const embed = useSelector((state) => state.video.selectedVideo);

    return (
        <>
            <Container>
                {embed != null
                    ? embed.map((i) => (
                          <EmbedYoutube
                              link={i.id}
                              title={i.snippet.title}
                              vizu={i.statistics.viewCount}
                              like={i.statistics.likeCount}
                              dislike={i.statistics.dislikeCount}
                              description={i.snippet.description}
                          />
                      ))
                    : null}
            </Container>
        </>
    );
};

export default Embed;
