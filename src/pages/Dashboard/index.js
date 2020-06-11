import React from 'react';
import { useSelector } from 'react-redux';

import ListVideos from '~/components/ListVideos';
import Video from '~/components/Video';

import { Container } from './styles';

const Dashboard = () => {
    const videos = useSelector((state) => state.video.videos);

    return (
        <>
            <Container>
                <ListVideos>
                    {videos != null
                        ? videos.map((i) => (
                              <Video
                                  key={i.kind}
                                  thumbnail={i.snippet.thumbnails.high.url}
                                  title={i.snippet.title}
                                  description={i.snippet.description}
                                  id={i.id.videoId}
                              />
                          ))
                        : null}
                </ListVideos>
            </Container>
        </>
    );
};

export default Dashboard;
