import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Report from './pages/Report';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Report} />
            </ Switch>
        </BrowserRouter>
    );
}