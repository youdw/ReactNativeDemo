import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import RootReducer from '../reducers/RootReducer';

let middlewares = [
    thunk
];

let createAppStore = applyMiddleware(...middlewares)(createStore);


export default function configureStore(onComplete: ()=> void) {
    const store = autoRehydrate()(createAppStore)(RootReducer);
    let opt = {
        storage: AsyncStorage,
        transform: [],
    };
    persistStore(store, opt, onComplete);
    return store;
}

/*

 const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

 let store = createStoreWithMiddleware(RootReducer);
 export default store;*/
