import produce from 'immer';

const INITIAL_STATE = {
    videos: null,
    selectedVideo: false,
    success: false,
    float: false,
};

export default function video(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@video/SEARCH_SUCCESS':
            return produce(state, (draft) => {
                draft.videos = action.payload.items;
                draft.float = true;
            });
        case '@video/EMBED_SUCCESS':
            return produce(state, (draft) => {
                draft.selectedVideo = action.payload.items;
                draft.success = true;
            });
        default:
            return state;
    }
}
