function PopupWithForm(props) {
  return (
    <section className={props.isOpen ? 'popup popup_opened':'popup'} id={props.id}>
      <div className="popup__form-container popup__container">
        <h2 className="popup__heading">{props.title}</h2>
        <form
          className="popup__form"
          id={`${props.id}-form`}
          name={props.name}
          noValidate
        >
            {props.children}
          <button
            className="popup__save-button"
            type="submit"
            value={props.submitText}
          >
            {props.submitText}
          </button>
        </form>
        <button
          className="popup__close-button"
          id={`${props.id}-close-button`}
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
