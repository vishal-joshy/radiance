import React, { ReactElement, useState, useEffect } from "react";

interface Props {
  label: String;
  handleChange(valueOne: number, valueTwo: number): void;
}

function DoubleSlider({ label, handleChange }: Props): ReactElement {
  const [sliderValueOne, setSliderValueOne] = useState(0);
  const [sliderValueTwo, setSliderValueTwo] = useState(0);

  useEffect(() => {
    handleChange(sliderValueOne, sliderValueTwo);
  }, [sliderValueTwo, sliderValueOne]);

  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        type="range"
        min={0}
        max={100}
        value={sliderValueOne}
        onChange={({ target }) => setSliderValueOne(parseInt(target.value))}
      />
      <input
        type="text"
        value={sliderValueOne}
        onChange={({ target }) => setSliderValueOne(parseInt(target.value))}
      />
      <label htmlFor="">{label}</label>
      <input
        type="range"
        min={0}
        max={100}
        value={sliderValueTwo}
        onChange={({ target }) => setSliderValueTwo(parseInt(target.value))}
      />
      <input
        type="text"
        value={sliderValueTwo}
        onChange={({ target }) => setSliderValueTwo(parseInt(target.value))}
      />
    </div>
  );
}

export default DoubleSlider;
