import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Dashboard from '~/pages/Dashboard';
import Embed from '~/pages/Embed';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/video" component={Embed} isPrivate />
        </Switch>
    );
}
