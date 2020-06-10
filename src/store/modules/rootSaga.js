import { all } from 'redux-saga/effects';

import video from './video/sagas';

export default function* rootSaga() {
    return yield all([video]);
}
