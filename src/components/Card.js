function Card(props) {
    function handleClick() {
        props.onCardClick(props.cardData);
      } 

    return (<li className="elements__item">
    <img className="elements__photo"
        src={props.cardData.link}
        alt={"Фото места " + props.cardData.name} 
        onClick={handleClick}
        />
    <div className="elements__description-container">
        <h2 className="elements__description">{props.cardData.name}</h2>
        <div className="elements__like-wrapper">
            <button className="elements__like-button" type="button">
            </button>
            <p className="elements__like-counter">{props.cardData.likes.length}</p>
        </div>
    </div>
    <button className="elements__delete-button" type="button"></button>
    </li>)
}

export default Card;