import { SET_URL, SET_AUTHOR, SET_DATE, SET_TITLE, SET_PUBLISHER } from './action-types';

const initialState = {
  URL: "",
  Author: "",
  Date: "",
  Title: "",
  Publisher: ""
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_URL: {
      const { URL } = action.payload;
      return {
        ...state,
        URL
      }
    }
    case SET_AUTHOR: {
      const { Author } = action.payload;
      return {
        ...state,
        Author
      }
    }
    case SET_DATE: {
      const { Date } = action.payload;
      return {
        ...state,
        Date
      }
    }
    case SET_TITLE: {
      const { Title } = action.payload;
      return {
        ...state,
        Title
      }
    }
    case SET_PUBLISHER: {
      const { Publisher } = action.payload;
      return {
        ...state,
        Publisher
      }
    }
    default:
      return state;
  }
}
