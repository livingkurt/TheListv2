import {
  LISTS_READ_REQUEST, LISTS_READ_SUCCESS, LISTS_READ_FAIL,
  LIST_READ_REQUEST, LIST_READ_SUCCESS, LIST_READ_FAIL, LIST_SAVE_REQUEST, LIST_SAVE_SUCCESS, LIST_SAVE_FAIL, LIST_DELETE_SUCCESS, LIST_DELETE_FAIL, LIST_DELETE_REQUEST
} from "../constants/list_constants"

function lists_read_reducer(state = { lists: [] }, action) {

  switch (action.type) {
    case LISTS_READ_REQUEST:
      return { loading: true, lists: [] };
    case LISTS_READ_SUCCESS:
      return { loading: false, success: true, lists: action.payload };
    case LISTS_READ_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

function list_read_reducer(state = { list: {} }, action) {

  switch (action.type) {
    case LIST_READ_REQUEST:
      return { loading: true };
    case LIST_READ_SUCCESS:
      return { loading: false, success: true, list: action.payload };
    case LIST_READ_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

function list_delete_reducer(state = { list: {} }, action) {

  switch (action.type) {
    case LIST_DELETE_REQUEST:
      return { loading: true };
    case LIST_DELETE_SUCCESS:
      return { loading: false, success: true, list: action.payload };
    case LIST_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

function list_save_reducer(state = { list: {} }, action) {

  switch (action.type) {
    case LIST_SAVE_REQUEST:
      return { loading: true };
    case LIST_SAVE_SUCCESS:
      return { loading: false, success: true, list: action.payload };
    case LIST_SAVE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

export { lists_read_reducer, list_read_reducer, list_save_reducer, list_delete_reducer }