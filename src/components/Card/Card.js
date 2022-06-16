import React from "react";
import styles from "./Card.module.css";

const Card = ({ hotel }) => {
  const { name, photo, description, country, price, rooms } = hotel;
  const getLogoPrice = (p) => {
    switch (p) {
      case 1:
        p = `$`;
        break;

      case 2:
        p = `$$`;
        break;

      case 3:
        p = `$$$`;
        break;

      case 4:
        p = "$$$$";
        break;

      default:
        p = "-";
        break;
    }

    return p;
  };

  return (
    <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
      <div className={`card`}>
        <div className={`card-image ${styles["image"]}`}>
          <figure className="image is-4by3">
            <img
              src={
                photo.charAt(0) !== "."
                  ? photo
                  : "https://via.placeholder.com/150"
              }
              alt="Placeholder"
            />
          </figure>
        </div>
        <div className={`card-content ${styles["content"]}`}>
          <div className="media">
            <div className="media-left"></div>
            <div className={`media-content`}>
              <p className={`title is-4 ${styles["title"]}`}>{name}</p>
              <p className={`subtitle is-6 ${styles["media"]}`}>
                <i className="fa-solid fa-globe"></i>
                {country}
              </p>
            </div>
          </div>

          <div className={`content ${styles["media"]}`}>
          <p className={styles["price"]}>{getLogoPrice(price)}</p>
            <p>{description}</p>
            <p>
            <i className="fa-solid fa-bed"></i> 
              Cantidad de habitaciones: {rooms}
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
