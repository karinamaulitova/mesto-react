import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

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
  }, []);

  React.useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards([...cards, ...data]);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button
            className="profile__avatar-edit-button"
            onClick={props.onEditAvatar}
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
                onClick={props.onEditProfile}
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
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="Карточки с фотографиями">
        <ul className="elements__list" id="elements-list">
          {cards.map((cardData) => (
            <Card
              key={cardData._id}
              cardData={cardData}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
