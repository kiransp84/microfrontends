//comment this lines
//import './set-public-path';

import singleSpaReact from 'single-spa-react';

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent : App
})

export const bootstrap = lifecycles.bootstrap ;

export const mount = lifecycles.mount ;

export const unmount = lifecycles.unmount ;