import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
// import { postUser, postSession, deleteSession } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  // window.postUser =postUser;
  // window.postSession = postSession;
  // window.deleteSession = deleteSession;
  const root = document.getElementById("root");
  const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Welcome to SoundWave</h1>, root);
});