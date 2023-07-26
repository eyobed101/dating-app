import React, { useState } from "react";
import TinderCard from "react-tinder-card"; // This package has a feature that provides the swipe effect.
import "./DatingCards.css";

const DatingCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Random Guy",
      imgUrl:
        "https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
    },
    {
      name: "Another Guy",
      imgUrl:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Random Girl",
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Another Girl",
      imgUrl:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("receiving " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen!!");
  };
  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {people.map((person) => {
            return (
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
                    </div>
                </TinderCard>
            );
        })}
      </div>
    </div>
  );
};
export default DatingCards;
