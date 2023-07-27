// datingReducer.js

import { SWIPE_PERSON, ADD_TO_FAVORITES } from "../action/types";

const initialState = {
  people: [],
};

const datingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWIPE_PERSON:
      // Handle swiping logic here
      console.log("Receiving " + action.payload.nameToDelete);
      return state;
    case ADD_TO_FAVORITES:
      // Handle adding to favorites logic here
      console.log("Adding " + action.payload + " to favorites");
      return state;
    default:
      return state;
  }
};

export default datingReducer;
