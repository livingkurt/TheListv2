import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import Cookie from 'js-cookie'
import { notes_read_reducer, note_read_reducer, note_save_reducer, note_delete_reducer } from './reducers/note_reducers';
import { lists_read_reducer, lists_read_order_reducer, list_read_reducer, list_save_reducer, list_delete_reducer } from './reducers/list_reducers';


// const cartItems = Cookie.getJSON("cartItems") || [];
// const userInfo = Cookie.getJSON("userInfo") || null;
// console.log({ "store": userInfo })

const initialState = {};

const reducer = combineReducers({
  notes_read: notes_read_reducer,
  note_read: note_read_reducer,
  note_save: note_save_reducer,
  note_delete: note_delete_reducer,
  lists_read: lists_read_reducer,
  lists_read_order: lists_read_order_reducer,
  list_read: list_read_reducer,
  list_save: list_save_reducer,
  list_delete: list_delete_reducer
})
// console.log()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;