import React, { ReactElement, useState, useEffect } from 'react';
import Slider from './Slider';

interface Props {
  firstLabel: string;
  secondLabel: string;
  id: string;
  selectedValues?:any;
  handleChange({ id, firstSliderValue, secondSliderValue, getValue }: any): void;
  getValue(firstValue: number, secondValue: number): string;
}

function DoubleSlider({
  id,
  firstLabel,
  secondLabel,
  handleChange,
  getValue,
  selectedValues
}: Props): ReactElement {
  const [sliderValueOne, setSliderValueOne] = useState(selectedValues?.firstSliderValue||0);
  const [sliderValueTwo, setSliderValueTwo] = useState(selectedValues?.secondSliderValue||0);
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
      <Slider
        label={firstLabel}
        sliderValue={sliderValueOne}
        handleSlider={(value: any) => setSliderValueOne(value)}
        defaultValue={selectedValues?.firstSliderValue}
      />
      <Slider
        label={secondLabel}
        sliderValue={sliderValueTwo}
        handleSlider={(value: any) => setSliderValueTwo(value)}
        defaultValue={selectedValues?.secondSliderValue}
      />
    </div>
  );
}

export default DoubleSlider;
