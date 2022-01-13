import React, { ReactElement, useState, useEffect } from "react";
import Slider from "./Slider";

interface Props {
  labelOne: string;
  labelTwo: string;
  id: string;
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
      <Slider
        label={labelOne}
        sliderValue={sliderValueOne}
        handleSlider={(value: any) => setSliderValueOne(value)}
      />
      <Slider
        label={labelTwo}
        sliderValue={sliderValueTwo}
        handleSlider={(value: any) => setSliderValueTwo(value)}
      />
    </div>
  );
}

export default DoubleSlider;
