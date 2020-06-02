import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import Cookie from 'js-cookie'
import { notes_read_reducer, note_read_reducer, note_save_reducer, note_delete_reducer } from './reducers/note_reducers';


// const cartItems = Cookie.getJSON("cartItems") || [];
// const userInfo = Cookie.getJSON("userInfo") || null;
// console.log({ "store": userInfo })

const initialState = {};
const reducer = combineReducers({
  get_notes: notes_read_reducer,
  get_note: note_read_reducer,
  save_note: note_save_reducer,
  delete_note: note_delete_reducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;