import React, { useEffect, useState } from "react";
import "../App.css";
import { MdNavigateBefore, MdNavigateNext, MdShuffle } from "react-icons/md";

import { Karakter } from "../api/Karakter";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const { name, photo } = Karakter[index];

  const checkIndex = (newIndex) => {
    if (newIndex > Karakter.length - 1) {
      return 0;
    }
    if (newIndex < 0) {
      return Karakter.length - 1;
    }
    return newIndex;
  };

  const nextPhoto = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const prevPhoto = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const randomPhoto = () => {
    setIndex((index) => {
      let newIndex = Math.floor(Math.random() * Karakter.length);
      return newIndex;
    });
  };

  useEffect(() => {
    randomPhoto();
  }, []);

  return (
    <div className="card">
      <h1>smackdown and raw characters</h1>
      <div className="card-slider">
        <button onClick={prevPhoto}>
          <MdNavigateBefore />
        </button>
        <img src={photo} />
        <button onClick={nextPhoto}>
          <MdNavigateNext />
        </button>
      </div>
      <div className="card-footer">
        <p>{name}</p>
        <button onClick={randomPhoto}>
          <MdShuffle />
        </button>
      </div>
    </div>
  );
};

export default Slider;
