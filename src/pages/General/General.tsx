import React, { ChangeEvent, ReactElement } from 'react';
import DropDown from 'components/DropDown/DropDown';
import Layout from 'components/Layout';
import {
  setGeneral,
  removeFromGeneral,
  setGeneralMisc,
  removeFromGeneralMisc,
} from 'store/general/generalSlice';
import { useAppDispatch } from 'store/hooks';
import * as generalData from 'data/general';
import DoubleSlider from 'components/Slider/DoubleSlider';
import { createKeyPair } from 'utilities/string';
import TextInput from 'components/TextInput/TextInput';

function General(): ReactElement {
  const dispatch = useAppDispatch();

  const handleDropdown = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '') {
      dispatch(removeFromGeneral(e.target.id));
    } else {
      const result = createKeyPair(e.target.id, e.target.value);
      dispatch(setGeneral(result));
    }
  };

  const handleDoubleSlider = ({ id, firstSliderValue, secondSliderValue, getValue }: any) => {
    if (firstSliderValue && secondSliderValue) {
      const value = getValue(firstSliderValue, secondSliderValue);
      const result = createKeyPair(id, value);
      dispatch(setGeneral(result));
    } else {
      dispatch(removeFromGeneral(id));
    }
  };

  const handleDropdownMisc = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '') {
      dispatch(removeFromGeneralMisc(e.target.id));
    } else {
      const result = createKeyPair(e.target.id, e.target.value);
      dispatch(setGeneralMisc(result));
    }
  };

  return (
    <Layout>
      {generalData.dropdown.map(({ id, label, options }) => (
        <DropDown key={id} id={id} label={label} options={options} handleChange={handleDropdown} />
      ))}
      {generalData.miscData.map(({ id, label, options }) => (
        <DropDown
          key={id}
          id={id}
          label={label}
          options={options}
          handleChange={handleDropdownMisc}
        />
      ))}
      {generalData.doubleSlider.map(({ id, firstLabel, secondLabel, getValue }) => (
        <DoubleSlider
          key={id}
          labelOne={firstLabel}
          labelTwo={secondLabel}
          id={id}
          getValue={getValue}
          handleChange={handleDoubleSlider}
        />
      ))}
      <h5>Screenshot</h5>
      <TextInput
        label={generalData.screenShot.textInput.label}
        id={generalData.screenShot.textInput.id}
      />
      {generalData.screenShot.dropdown.map(({ id, label, options }) => (
        <DropDown key={id} id={id} label={label} options={options} handleChange={handleDropdown} />
      ))}
    </Layout>
  );
}

export default General;
