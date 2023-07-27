// datingActions.js

export const swipePerson = (direction, nameToDelete) => {
  return {
    type: "SWIPE_PERSON",
    payload: { direction, nameToDelete },
  };
};

export const addToFavorites = (name) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: name,
  };
};
