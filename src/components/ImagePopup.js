function ImagePopup(props) {
    const link = props.cardData ? props.cardData.link : '';
    const name = props.cardData ? props.cardData.name : '';

    return (<section className={props.cardData ? "photo-popup popup popup_opened": "photo-popup popup"} id="photo-popup" ariaLabel="Фото попап">
        <div className="photo-popup__container popup__container">
            <figure className="photo-popup__image-wrapper">
                <img className="photo-popup__image"
                    src={link}
                    alt="Фото места" />
                <figcaption class="photo-popup__description">{name}</figcaption>
            </figure>
            <button onClick={props.onClose} className="photo-popup__close-button popup__close-button popup__close-button_type_photo-mobile"
                type="button"></button>
        </div>
    </section>)
}

export default ImagePopup;