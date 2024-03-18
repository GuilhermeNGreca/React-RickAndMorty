import React, { useState } from "react";
import "./Cards.css";

//Components
import Modal from "../Modal/Modal";

const Cards = ({ result }) => {
  const isDead = result.status === "Dead";
  const imageClass1 = isDead ? "img_1_dead" : "img_1_alive";
  const imageClass2 = isDead ? "img_2_dead" : "img_2_alive";

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    if (modalOpen === false) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    if (modalOpen === true) {
      setModalOpen(false);
    }
  };

  return (
    <div className="cards_container" onClick={openModal}>
      <div className={`img_1 ${imageClass1}`}>
        <img src={result.image} alt={result.name} />
      </div>

      <div className="description">
        <img
          src={result.image}
          alt={result.name}
          className={`img_2 ${imageClass2}`}
        />
        <h3>{result.name}</h3>
        <p>{result.species}</p>
      </div>

      {modalOpen && <Modal characterId={result.id} onClick={closeModal} />}
    </div>
  );
};

export default Cards;
