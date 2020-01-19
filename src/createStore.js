 import { createStore, applyMiddleware } from 'redux';
 import ReduxThunk from 'redux-thunk';

 import RootReducer from './reducers';

 export const middleWares = [ReduxThunk];

 export const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);

//  export const store = createStore(RootReducer);

 export const store = createStore(RootReducer, applyMiddleware(ReduxThunk));