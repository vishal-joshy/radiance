import React, { ReactElement } from 'react';
import { useAppDispatch } from 'store/hooks';
import { createKeyPair } from 'utilities/string';
import { setAudio, removeFromAudio } from 'store/audio/audioSlice';
import * as audioData from 'data/audio';
import DropDown from 'components/DropDown/DropDown';
import Layout from 'components/Layout';
import SingleSlider from 'components/Slider/SingleSlider';

type Props = {};

function Audio({}: Props): ReactElement {
  const dispatch = useAppDispatch();

  const handleDropdown = (e: any) => {
    if (!e.target.value) {
      dispatch(removeFromAudio(e.target.id));
    } else {
      const result = createKeyPair(e.target.id, e.target.value);
      dispatch(setAudio(result));
    }
  };

  const handleSlider = ({ id, sliderValue, defaultValue }: any) => {
    if (sliderValue === defaultValue) {
      dispatch(removeFromAudio(id));
    } else {
      dispatch(setAudio(createKeyPair(id, sliderValue)));
    }
  };

  return (
    <Layout>
      {audioData.dropdown.map(({ id, label, options }) => (
        <DropDown key={id} id={id} label={label} options={options} handleChange={handleDropdown} />
      ))}
      {audioData.slider.map(({ label, id, max, defaultValue }) => (
        <SingleSlider
          key={id}
          sliderLabel={label}
          id={id}
          max={max}
          defaultValue={defaultValue}
          handleChange={handleSlider}
        />
      ))}
    </Layout>
  );
}

export default Audio;
