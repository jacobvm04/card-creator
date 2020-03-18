import { SET_URL, SET_AUTHOR, SET_DATE, SET_TITLE, SET_PUBLISHER } from './action-types';

export const setURL = url => ({
  type: SET_URL,
  payload: {
    url
  }
});

export const setAuthor = author => ({
  type: SET_AUTHOR,
  payload: {
    author
  }
});

export const setDate = date => ({
  type: SET_DATE,
  payload: {
    date
  }
});

export const setTitle = title => ({
  type: SET_TITLE,
  payload: {
    title
  }
});

export const setPublisher = publisher => ({
  type: SET_PUBLISHER,
  payload: {
    publisher
  }
});
