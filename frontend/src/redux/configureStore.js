import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { isServer } from '../services/Helpers';
import rootReducer, { ReduxState } from './index';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';

export const reduxPersistRootKey = 'root-persist-boilerplate';

export const persistConfig = {
    key: reduxPersistRootKey,
    storage: storage,
    blacklist: ['form']
};

const configureStore = (initialState) => {
    const allReducers = !isServer()
        ? persistReducer(persistConfig, rootReducer)
        : rootReducer;

    const store = createStore(
        allReducers,
        initialState,
        compose(
            applyMiddleware(
                thunk,
            ),
            !isServer() && window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : (f) => f,
        ),
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./index', () => {
            const nextRootReducer = require('./index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return {store};
};

export default configureStore;