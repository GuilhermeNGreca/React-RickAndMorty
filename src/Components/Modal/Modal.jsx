import React, { useEffect, useState } from "react";
import "./Modal.css";
import axios from "axios";

const Modal = ({ characterId, onClick, allCharacters }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `http://localhost:80/idsearch?id=${characterId}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };
    fetchCharacter();
  }, [characterId]);

  const getAboutText = () => {
    if (!character) return "";
    let gender = "";
    switch (character.gender) {
      case "Male":
        gender = "He";
        break;
      case "Female":
        gender = "She";
        break;
      default:
        gender = "He";
        break;
    }

    switch (character.status) {
      case "Alive":
        return `${character.name} is a ${character.gender} ${character.species}. ${gender} is ${character.status} and well.`;
      case "Dead":
        return `${character.name} was a ${character.gender} ${character.species}. ${gender} is ${character.status}.`;
      default:
        return `${character.name} is a ${character.gender} ${character.species}. It cant't be told if ${gender} is alive or dead.`;
    }
  };

  const getDimension = (name) => {
    let name_test = "";
    name === "origin"
      ? (name_test = "origin_name")
      : (name_test = "location_name");

    if (character[name_test] === "unknown") {
      return "Unknown dimension";
    }
    return "Replacement Dimension";
  };

  return (
    <div className="modal_content">
      {character && (
        <div className="modal">
          <div className="modal_1">
            <img
              src={character.image}
              alt={character.name}
              className="modal_1_bg"
            />
            <button className="close_button" onClick={onClick}>
              Close
            </button>
            <div className="modal_card">
              <img src={character.image} alt={character.name} />
              <div className="modal_1_description">
                <h2>{character.name}</h2>
                <p>{character.species}</p>
              </div>
            </div>
          </div>

          <div className="modal_2">
            <div className="modal_2_description">
              <div className="about">
                <h1>ABOUT</h1>
                <p>{getAboutText()}</p>
              </div>

              <div className="origin">
                <h1>ORIGIN</h1>
                <h2>{character.origin_name}</h2>
                <h3>{getDimension("origin")}</h3>
              </div>

              <div className="location">
                <h1>LOCATION</h1>
                <h2>{character.location_name}</h2>
                <h3>{getDimension("location")}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
