// datingReducer.js

import { SWIPE_PERSON, ADD_TO_FAVORITES } from "../action/types";

const initialState = {
  people: [],
  currentPersonIndex: 0,
};

const datingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWIPE_PERSON:
      // Handle swiping logic here
      const { direction } = action.payload;
      const currentPersonIndex = state.currentPersonIndex;

      if (direction === "left") {
        // Handle swiping left logic here
        console.log(
          "Swiped left on person: " + state.people[currentPersonIndex].name
        );
      } else if (direction === "right") {
        // Handle swiping right logic here
        console.log(
          "Swiped right on person: " + state.people[currentPersonIndex].name
        );
      }

      const nextPersonIndex = currentPersonIndex + 1;
      if (nextPersonIndex < state.people.length) {
        return {
          ...state,
          currentPersonIndex: nextPersonIndex,
        };
      } else {
        return {
          ...state,
          currentPersonIndex: 0,
        };
      }

    // console.log("Receiving " + action.payload.nameToDelete);
    // return state;
    case ADD_TO_FAVORITES:
      // Handle adding to favorites logic here
      console.log("Adding " + action.payload + " to favorites");
      return state;
    default:
      return state;
  }
};

export default datingReducer;
