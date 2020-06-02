import {
  NOTES_READ_REQUEST, NOTES_READ_SUCCESS, NOTES_READ_FAIL,
  NOTE_READ_REQUEST, NOTE_READ_SUCCESS, NOTE_READ_FAIL, NOTE_SAVE_REQUEST, NOTE_SAVE_SUCCESS, NOTE_SAVE_FAIL, NOTE_DELETE_SUCCESS, NOTE_DELETE_FAIL, NOTE_DELETE_REQUEST
} from "../constants/note_constants"
import axios from 'axios';

const get_notes = () => async (dispatch) => {
  try {

    dispatch({ type: NOTES_READ_REQUEST });
    const { data } = await axios.get("/api/notes");
    dispatch({ type: NOTES_READ_SUCCESS, payload: data });
  }
  catch (error) {

    dispatch({ type: NOTES_READ_FAIL, payload: error.message });
  }
}

const save_note = (note) => async (dispatch, getState) => {
  try {
    dispatch({ type: NOTE_SAVE_REQUEST, payload: note });
    const { userLogin: { userInfo } } = getState();
    if (!note._id) {
      const { data } = await axios.post('/api/note', note, {
      });
      dispatch({ type: NOTE_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put('/api/note/' + note._id, note, {
        headers: {
          'Authorization': 'Bearer ' + userInfo.token
        }
      });
      dispatch({ type: NOTE_SAVE_SUCCESS, payload: data });
    }

  } catch (error) {

    dispatch({ type: NOTE_SAVE_FAIL, payload: error.message });
  }
}

const get_note = (noteId) => async (dispatch) => {
  try {
    dispatch({ type: NOTE_READ_REQUEST, payload: noteId });
    const { data } = await axios.get("/api/notes/" + noteId);
    dispatch({ type: NOTE_READ_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: NOTE_READ_FAIL, payload: error.message });

  }
}

const delete_note = (noteId) => async (dispatch, getState) => {
  try {
    const { userLogin: { userInfo } } = getState();
    dispatch({ type: NOTE_DELETE_REQUEST, payload: noteId });
    const { data } = await axios.delete("/api/notes/" + noteId, {
    });
    dispatch({ type: NOTE_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: NOTE_DELETE_FAIL, payload: error.message });

  }
}

export { get_notes, get_note, save_note, delete_note }