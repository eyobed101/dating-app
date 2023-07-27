import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TinderCard from "react-tinder-card";
import "./DatingCards.css";
import axios from "../../axois/axios";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import SwipeButtons from "../SwipeButtons/SwipeButtons";
import { swipePerson, addToFavorites } from "../../redux/action/datingActions";

const DatingCards = ({ people, swipePerson, addToFavorites }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/dating/cards");
      // Dispatch action to update the people in Redux store
      setCards(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    swipePerson(direction, nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!!");
  };

  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {cards.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
              <IconButton
                className="swipeButtons__right"
                onClick={() => addToFavorites(person.name)}
              >
                <FavoriteIcon fontSize="large" />
              </IconButton>
            </div>
          </TinderCard>
        ))}
      </div>
      <SwipeButtons />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    people: state.dating.people,
  };
};

export default connect(mapStateToProps, { swipePerson, addToFavorites })(DatingCards);
