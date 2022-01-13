import React, { ReactElement } from "react";

interface Props {
  label: string;
  sliderValue: number;
  handleSlider: any;
}

function Slider({ label, sliderValue, handleSlider }: Props): ReactElement {
  return (
    <div>
      <div className={style.sliderContainer}>
        <label htmlFor="">{label}</label>
        <div>
          <input
            type="range"
            min={0}
            max={100}
            value={sliderValue}
            onChange={({ target }) => handleSlider(parseInt(target.value))}
          />
          <input
            className={style.textInput}
            type="number"
            max={100}
            min={0}
            value={sliderValue}
            onChange={({ target }) => handleSlider(parseInt(target.value))}
          />
        </div>
      </div>
    </div>
  );
}

const style = {
  sliderContainer: "flex justify-between p-2 2-80",
  textInput: "w-10",
};

export default Slider;
