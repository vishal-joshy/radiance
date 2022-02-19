import React, { ReactElement, useState, useEffect } from 'react';
import Slider from './Slider';

interface Props {
  sliderLabel: string;
  id: string;
  handleChange({ sliderValue, id }: any): void;
  max?: number;
  defaultValue?: number;
}

function SingleSlider({
  id,
  sliderLabel,
  handleChange,
  max = 100,
  defaultValue,
}: Props): ReactElement {
  const [sliderValue, setSliderValue] = useState(defaultValue);

  useEffect(() => {
    handleChange({
      sliderValue,
      id,
    });
  }, [sliderValue]);

  return (
    <div>
      <Slider
        max={max}
        label={sliderLabel}
        sliderValue={sliderValue}
        handleSlider={(value: any) => setSliderValue(value)}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default SingleSlider;
