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
    <div >
      <div className={style.sliderContainer}>
      <label htmlFor="">{labelOne}</label>
      <div>
      <input
        type="range"
        min={0}
        max={100}
        value={sliderValueOne}
        onChange={({ target }) => setSliderValueOne(parseInt(target.value))}
      />
      <input
        className={style.textInput}
        type="number"
        max={100}
        min={0}
        value={sliderValueOne}
        onChange={({ target }) => setSliderValueOne(parseInt(target.value))}
      />
      </div>
      </div>
      <div className={style.sliderContainer}>
      <label htmlFor="">{labelTwo}</label>
      <div>
      <input
        type="range"
        min={0}
        max={100}
        value={sliderValueTwo}
        onChange={({ target }) => setSliderValueTwo(parseInt(target.value))}
      />
      <input
        className={style.textInput}
        type="number"
        max={100}
        min={0}
        value={sliderValueTwo}
        onChange={({ target }) => setSliderValueTwo(parseInt(target.value))}
      />
      </div>
      </div>
    </div>
  );
}

const style={
  sliderContainer:"flex justify-between p-2 2-80",
  textInput:'w-10'
}

export default DoubleSlider;
