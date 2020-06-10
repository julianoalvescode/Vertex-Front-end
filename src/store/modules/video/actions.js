export function searchRequest(term) {
    return {
        type: '@video/SEARCH_REQUEST',
        payload: { term },
    };
}

export function searchSuccess(items) {
    return {
        type: '@video/SEARCH_SUCCESS',
        payload: { items },
    };
}

export function embedRequest(videoID) {
    return {
        type: '@video/EMBED_REQUEST',
        payload: { videoID },
    };
}

export function embedSuccess(items) {
    return {
        type: '@video/EMBED_SUCCESS',
        payload: { items },
    };
}

export function searchFailure() {
    return {
        type: '@video/SEARCH_FAILURE',
    };
}
