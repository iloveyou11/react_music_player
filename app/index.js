import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './root'

render(
    <AppContainer>
        <Root></Root>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./root.js', () => {
        const NewApp = require('./root').default;
        render(
            <AppContainer>
               <NewApp></NewApp>
            </AppContainer>,
            document.getElementById('root')
        );
    })
}