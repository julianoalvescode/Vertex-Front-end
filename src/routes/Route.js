import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

import DefaultLayout from '~/pages/layouts/default';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const selected = useSelector((state) => state.video.selectedVideo);

    if (!selected && isPrivate) {
        return <Redirect to="/" />;
    }

    return (
        <Route
            {...rest}
            render={(props) => (
                <DefaultLayout>
                    <Component {...props} />
                </DefaultLayout>
            )}
        />
    );
}

RouteWrapper.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};
