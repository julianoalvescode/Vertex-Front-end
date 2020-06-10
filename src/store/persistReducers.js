import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducer = persistReducer(
        {
            key: 'vertex',
            storage,
            whitelist: ['video'],
        },
        reducers
    );
    return persistedReducer;
};
