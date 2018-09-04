import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import injectGlobalCss from './config/injectGlobalCss';

const {store} = configureStore((window).__INITIAL_STATE__);

const AppRoot = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

injectGlobalCss();

// Only show app after persisting state.
persistStore(store, {}, () => {
    ReactDOM.render(
        AppRoot,
        document.getElementById('root'),
    );
});

if (module.hot) {
    module.hot.accept();
}
