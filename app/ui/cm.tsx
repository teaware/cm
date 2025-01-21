"use client";
import React, { useState } from "react";

type Value = number | string;

interface RandomPickerProps {
  values: ReadonlyArray<Value>;
  init: number | string;
}

const RandomPicker: React.FC<RandomPickerProps> = ({ values, init }) => {
  const [currentValue, setCurrentValue] = useState<Value | null>(null);

  const getRandomValue = () => {
    const randomIndex = Math.floor(Math.random() * values.length);
    setCurrentValue(values[randomIndex]);
  };

  return (
    <span onClick={getRandomValue}>
      {currentValue ? currentValue.toString() : init}
    </span>
  );
};

export default RandomPicker;
