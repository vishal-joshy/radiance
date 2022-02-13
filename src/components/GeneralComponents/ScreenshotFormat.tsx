import Slider from 'components/Slider/Slider';
import React, { useState, useEffect } from 'react';
import DropDown from '../DropDown/DropDown';

type Props = {};

const data = {
  id: 'screenshot-format',
  options: {
    default: '',
    png: 'png',
    jpeg: 'jpeg',
    jpg: 'jpg',
  },
  label: 'Format',
};

export default function ScreenshotFormat({ handleChange }: any) {
  const [dropdownValue, setDropdownValue] = useState();
  const [sliderValue, setSliderValue] = useState(0);
  const sliderLabel = dropdownValue === 'png' ? 'Compression' : 'Quality';
  useEffect(() => {
    const sliderId = `screenshot-${dropdownValue}-${sliderLabel.toLocaleLowerCase()}`;

    handleChange({
      dropdownId: 'screenshot-format',
      dropdownValue,
      sliderId,
      sliderValue,
    });
  }, [sliderValue, dropdownValue]);

  return (
    <>
      <DropDown {...data} handleChange={(e: any) => setDropdownValue(e.target.value)} />
      <Slider
        label={sliderLabel}
        sliderValue={sliderValue}
        handleSlider={(value: any) => setSliderValue(value)}
      />
    </>
  );
}
