import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Dashboard from '~/pages/Dashboard';
import Embed from '~/pages/Embed';

export default function Routes() {
    return (
        <AnimatePresence>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/video" component={Embed} isPrivate />
            </Switch>
        </AnimatePresence>
    );
}
