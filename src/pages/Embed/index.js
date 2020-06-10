import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Container } from './styles';

import LoadScreen from '~/components/LoadScreen';
import EmbedYoutube from '~/components/EmbedYoutube';

const Embed = () => {
    const embed = useSelector((state) => state.video.selectedVideo);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <Container>
                {!loading ? null : <LoadScreen />}
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
