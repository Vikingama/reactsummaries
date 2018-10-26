import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./../reducers";

const configureStore = preloadState => {
    const store = createStore(
        reducers,
        preloadState,
        applyMiddleware(logger, thunk)
    );
    return store;
};

export default configureStore;
