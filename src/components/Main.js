import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getMyInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button
            className="profile__avatar-edit-button"
            onClick={onEditAvatar}
          >
            <img className="profile__avatar" src={userAvatar} alt="Фото" />
          </button>
          <div className="profile__info-wrapper">
            <div className="profile__heading-button-wrapper">
              <h1 className="profile__heading" id="profile-heading">
                {userName}
              </h1>
              <button
                className="profile__edit-button"
                id="profile-edit-button"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__subheading" id="profile-subheading">
              {userDescription}
            </p>
          </div>
        </div>
        <button
          className="profile__adding-button"
          id="card-adding-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="Карточки с фотографиями">
        <ul className="elements__list" id="elements-list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
