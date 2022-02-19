import React, { ReactElement } from 'react';

interface Props {
  label: string;
  sliderValue?: any;
  handleSlider: any;
  min?: number;
  max?: number;
  defaultValue?: number;
}

function Slider({
  label,
  sliderValue,
  handleSlider,
  min = 0,
  max = 100,
  defaultValue = 0,
}: Props): ReactElement {
  return (
    <div>
      <div className={style.sliderContainer}>
        <label htmlFor=''>{label}</label>
        <div>
          <input
            type='range'
            min={min}
            max={max}
            value={sliderValue || defaultValue}
            onChange={({ target }) => handleSlider(parseInt(target.value))}
          />
          <input
            className={style.textInput}
            type='number'
            max={max}
            min={min}
            value={sliderValue || defaultValue}
            onChange={({ target }) => handleSlider(parseInt(target.value))}
          />
        </div>
      </div>
    </div>
  );
}

const style = {
  sliderContainer: 'flex justify-between p-2 2-80',
  textInput: 'w-10',
};

export default Slider;
