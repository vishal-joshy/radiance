import React, { ReactElement, useState, useEffect } from "react";

interface Props {
  labelOne: String;
  labelTwo: string;
  id: String;
  handleChange({ id, firstSliderValue, secondSliderValue, getValue }: any): void;
  getValue(firstValue: number, secondValue: number): string;
}

function DoubleSlider({ id, labelOne, labelTwo, handleChange, getValue }: Props): ReactElement {
  const [sliderValueOne, setSliderValueOne] = useState(0);
  const [sliderValueTwo, setSliderValueTwo] = useState(0);

  useEffect(() => {
    handleChange({
      firstSliderValue: sliderValueOne,
      secondSliderValue: sliderValueTwo,
      id,
      getValue,
    });
  }, [sliderValueTwo, sliderValueOne]);

  return (
    <div>
      <label htmlFor="">{labelOne}</label>
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
      <label htmlFor="">{labelTwo}</label>
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
