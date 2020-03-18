import { SET_URL, SET_AUTHOR, SET_DATE, SET_TITLE, SET_PUBLISHER } from '../action-types';

const initialState = {
  url: "",
  author: "",
  date: "",
  title: "",
  publisher: ""
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_URL: {
      const { url } = action.payload;
      return {
        ...state,
        url
      }
    }
    case SET_AUTHOR: {
      const { author } = action.payload;
      return {
        ...state,
        author
      }
    }
    case SET_DATE: {
      const { date } = action.payload;
      return {
        ...state,
        date
      }
    }
    case SET_TITLE: {
      const { title } = action.payload;
      return {
        ...state,
        title
      }
    }
    case SET_PUBLISHER: {
      const { publisher } = action.payload;
      return {
        ...state,
        publisher
      }
    }
    default:
      return state;
  }
}
