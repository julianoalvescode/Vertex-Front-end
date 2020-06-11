import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';
import { Router } from 'react-router-dom';

import Routes from './routes';

import history from './service/history';
import { store, persistor } from './store';

import GlobalStyle from './styles/generic';

function App() {
    return (
        <>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />
                <title>Vertex Front-end</title>
            </Helmet>

            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Router history={history}>
                        <GlobalStyle />
                        <ToastContainer />
                        <Routes />
                    </Router>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
