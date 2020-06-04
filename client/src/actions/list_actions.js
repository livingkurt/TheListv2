import {
  LISTS_READ_REQUEST, LISTS_READ_SUCCESS, LISTS_READ_FAIL,
  LIST_READ_REQUEST, LIST_READ_SUCCESS, LIST_READ_FAIL, LIST_SAVE_REQUEST, LIST_SAVE_SUCCESS, LIST_SAVE_FAIL, LIST_DELETE_SUCCESS, LIST_DELETE_FAIL, LIST_DELETE_REQUEST
} from "../constants/list_constants"
import axios from 'axios';

const get_lists = () => async (dispatch) => {
  console.log("Hello lists")
  try {
    dispatch({ type: LISTS_READ_REQUEST });
    const { data } = await axios.get("/api/lists");
    dispatch({ type: LISTS_READ_SUCCESS, payload: data });
  }
  catch (error) {

    dispatch({ type: LISTS_READ_FAIL, payload: error.message });
  }
}

const save_list = (list) => async (dispatch, getState) => {
  try {
    dispatch({ type: LIST_SAVE_REQUEST, payload: list });
    const { userLogin: { userInfo } } = getState();
    if (!list._id) {
      const { data } = await axios.post('/api/lists', list, {
      });
      dispatch({ type: LIST_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put('/api/list/' + list._id, list, {
        headers: {
          'Authorization': 'Bearer ' + userInfo.token
        }
      });
      dispatch({ type: LIST_SAVE_SUCCESS, payload: data });
    }

  } catch (error) {

    dispatch({ type: LIST_SAVE_FAIL, payload: error.message });
  }
}

const get_list = (listId) => async (dispatch) => {
  try {
    dispatch({ type: LIST_READ_REQUEST, payload: listId });
    const { data } = await axios.get("/api/lists/" + listId);
    dispatch({ type: LIST_READ_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LIST_READ_FAIL, payload: error.message });

  }
}

const delete_list = (listId) => async (dispatch, getState) => {
  try {
    // const { userLogin: { userInfo } } = getState();
    dispatch({ type: LIST_DELETE_REQUEST, payload: listId });
    const { data } = await axios.delete("/api/lists/" + listId, {
    });
    dispatch({ type: LIST_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: LIST_DELETE_FAIL, payload: error.message });

  }
}

export { get_lists, get_list, save_list, delete_list }