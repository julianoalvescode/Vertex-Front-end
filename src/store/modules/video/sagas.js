import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api, { KEY } from '~/service/api';
import history from '~/service/history';

import { searchSuccess, embedSuccess } from './actions';

export function* searchRequest({ payload }) {
    const { term } = payload;

    try {
        const response = yield call(api.get, 'search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 15,
                key: KEY,
                type: 'video',
            },
        });

        const { items } = response.data;

        yield put(searchSuccess(items));
        history.push('/');
    } catch (e) {
        toast.error(`⚠ Não foi possivel fazer a pesquisa`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}

export function* embedRequest({ payload }) {
    const { videoID } = payload;

    try {
        const response = yield call(api.get, 'videos', {
            params: {
                id: videoID,
                part: 'snippet,statistics',
                key: KEY,
            },
        });

        const { items } = response.data;

        yield put(embedSuccess(items));
        history.push('/video');
    } catch (e) {
        toast.error(`⚠ ${e}`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}

export default all([
    takeLatest('@video/SEARCH_REQUEST', searchRequest),
    takeLatest('@video/EMBED_REQUEST', embedRequest),
]);
