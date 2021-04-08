import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__item">
      <img
        className="elements__photo"
        src={card.link}
        alt={"Фото места " + card.name}
        onClick={handleClick}
      />
      <div className="elements__description-container">
        <h2 className="elements__description">{card.name}</h2>
        <div className="elements__like-wrapper">
          <button className="elements__like-button" type="button"></button>
          <p className="elements__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button className="elements__delete-button" type="button"></button>
    </li>
  );
}

export default Card;
