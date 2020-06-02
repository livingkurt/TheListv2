import {
  NOTES_READ_REQUEST, NOTES_READ_SUCCESS, NOTES_READ_FAIL,
  NOTE_READ_REQUEST, NOTE_READ_SUCCESS, NOTE_READ_FAIL, NOTE_SAVE_REQUEST, NOTE_SAVE_SUCCESS, NOTE_SAVE_FAIL, NOTE_DELETE_SUCCESS, NOTE_DELETE_FAIL, NOTE_DELETE_REQUEST
} from "../constants/note_constants"

function notes_read_reducer(state = { notes: [] }, action) {

  switch (action.type) {
    case NOTES_READ_REQUEST:
      return { loading: true, notes: [] };
    case NOTES_READ_SUCCESS:
      return { loading: false, success: true, notes: action.payload };
    case NOTES_READ_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

function note_read_reducer(state = { note: {} }, action) {

  switch (action.type) {
    case NOTE_READ_REQUEST:
      return { loading: true };
    case NOTE_READ_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case NOTE_READ_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

function note_delete_reducer(state = { note: {} }, action) {

  switch (action.type) {
    case NOTE_DELETE_REQUEST:
      return { loading: true };
    case NOTE_DELETE_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case NOTE_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

function note_save_reducer(state = { note: {} }, action) {

  switch (action.type) {
    case NOTE_SAVE_REQUEST:
      return { loading: true };
    case NOTE_SAVE_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case NOTE_SAVE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

export { notes_read_reducer, note_read_reducer, note_save_reducer, note_delete_reducer }