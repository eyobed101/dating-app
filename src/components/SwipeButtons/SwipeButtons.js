import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { swipePerson, addToFavorites } from "../../redux/action/datingActions";

const SwipeButtons = ({ name, addToFavorites, swipePerson }) => {

  const handleAddToFavorites = () => {
    addToFavorites(name); // Replace "Person's Name" with the actual name
  };

  const handleSwipePerson = (direction) => {
    swipePerson(direction, name); // Replace "Person's Name" with the actual name
  };

  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left"  onClick={() => handleSwipePerson("left")}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right" onClick={() => handleSwipePerson("right")}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};
export default connect(null, { addToFavorites, swipePerson })(SwipeButtons);

