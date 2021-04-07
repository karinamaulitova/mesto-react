import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import React from "react";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(
    false
  );

  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(data) {
    setSelectedCard(data);
  }

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setisEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup onClose={closeAllPopups}  cardData={selectedCard} />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        id="edit-profile-popup"
        name="profile"
        title="Редактировать профиль"
        submitText="Сохранить"
      >
        <input
          className="popup__input"
          id="edit-profile-popup-name-input"
          type="text"
          name="name"
          placeholder="Имя"
          value="Жак-Ив Кусто"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error edit-profile-popup-name-input-error"></span>
        <input
          className="popup__input"
          id="edit-profile-popup-job-input"
          type="text"
          name="job"
          placeholder="Род занятий"
          value="Исследователь океана"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error edit-profile-popup-job-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        id="card-adding-popup"
        name="new-card"
        title="Новое место"
        submitText="Создать"
      >
        <input
          className="popup__input"
          id="card-adding-popup-place-name-input"
          type="text"
          name="place-name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__input-error card-adding-popup-place-name-input-error"></span>
        <input
          className="popup__input"
          id="card-adding-popup-image-link-input"
          type="url"
          name="image-link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error card-adding-popup-image-link-input-error"></span>{" "}
      </PopupWithForm>
      <PopupWithForm
        id="card-deleting-popup"
        name="delete-card"
        title="Вы уверены?"
        submitText="Да"
      />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        id="avatar-edit-popup"
        name="avatar-form"
        title="Обновить аватар"
        submitText="Сохранить"
      >
        <input
          className="popup__input"
          id="avatar-edit-popup-url-input"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error avatar-edit-popup-url-input-error"></span>
      </PopupWithForm>
    </div>
  );
}

export default App;
