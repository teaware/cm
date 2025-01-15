"use client";
import React, { useState } from "react";

const getRandomFourDistinctDigits = (): string => {
  let digits = "";
  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10).toString();
    if (!digits.includes(digit)) {
      digits += digit;
    }
  }
  return digits;
};

const RandomNumberComponent: React.FC = () => {
  // Use state to store the random number
  const [randomDigits, setRandomDigits] = useState(
    getRandomFourDistinctDigits()
  );

  // Function to generate a new set of four distinct digits on click
  const handleClick = () => {
    setRandomDigits(getRandomFourDistinctDigits());
  };

  return <span onClick={handleClick}>{randomDigits}</span>;
};

export default RandomNumberComponent;
