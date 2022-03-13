import React, { ChangeEvent, ReactElement } from "react";
import DropDown from "components/DropDown/DropDown";
import Layout from "components/Layout";
import {
  setGeneral,
  removeFromGeneral,
  setGeneralMisc,
  removeFromGeneralMisc,
  setGeneralDoubleSlider,
  removeFromGeneralDoubleSlider
} from "store/slices/generalSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import * as generalData from "data/general";
import DoubleSlider from "components/Slider/DoubleSlider";
import { createKeyPair } from "utilities/string";
import TextInput from "components/TextInput/TextInput";
import ScreenshotFormat from "components/GeneralComponents/ScreenshotFormat";

function General(): ReactElement {
  const dispatch = useAppDispatch();
  const generalDataState = useAppSelector((state) => state.general);

  const handleDropdown = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      dispatch(removeFromGeneral(e.target.id));
    } else {
      const result = createKeyPair(e.target.id, e.target.value);
      dispatch(setGeneral(result));
    }
  };

  const handleDoubleSlider = ({ id, firstSliderValue, secondSliderValue, getValue }: any) => {
    if (firstSliderValue && secondSliderValue) {
      const value = getValue(firstSliderValue, secondSliderValue);
      const result = createKeyPair(id, {firstSliderValue,secondSliderValue,value});
      dispatch(setGeneralDoubleSlider(result));
    } else {
      dispatch(removeFromGeneralDoubleSlider(id));
    }
  };

  const handleDropdownMisc = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      dispatch(removeFromGeneralMisc(e.target.id));
    } else {
      const result = createKeyPair(e.target.id, e.target.value);
      dispatch(setGeneralMisc(result));
    }
  };

  const handleScreenshotQuality = ({ dropdownId, dropdownValue, sliderId, sliderValue }: any) => {
    const dropdownData = createKeyPair(dropdownId, dropdownValue);
    const sliderData = createKeyPair(sliderId, sliderValue);
    const resetValues = () => {
      dispatch(removeFromGeneral("screenshot-jpg-quality"));
      dispatch(removeFromGeneral("screenshot-jpeg-quality"));
      dispatch(removeFromGeneral("screenshot-png-compression"));
    };
    resetValues();
    if (!dropdownValue) {
      dispatch(removeFromGeneral(dropdownId));
      dispatch(removeFromGeneral(sliderId));
    } else {
      dispatch(setGeneral(dropdownData));
      dispatch(setGeneral(sliderData));
    }
  };

  return (
    <Layout>
      {generalData.dropdown.map((data) => (
        <DropDown
          key={data.id}
          {...data}
          selectedValue={generalDataState.main[data.id]}
          handleChange={handleDropdown}
        />
      ))}

      {generalData.miscData.map((data) => (
        <DropDown
          key={data.id}
          {...data}
          selectedValue={generalDataState.misc[data.id]}
          handleChange={handleDropdownMisc}
        />
      ))}
      {generalData.doubleSlider.map((data) => (
        <DoubleSlider key={data.id} {...data} 
        selectedValues={generalDataState.doubleSlider[data.id]}
        handleChange={handleDoubleSlider} />
      ))}

      <ScreenShotOptions {...{ handleScreenshotQuality, handleDropdown }} />
    </Layout>
  );
}

const ScreenShotOptions = ({ handleScreenshotQuality, handleDropdown }: any) => (
  <>
    <h5>Screenshot</h5>
    <TextInput {...generalData.screenShot.textInput} />
    {generalData.screenShot.dropdown.map((data) => (
      <DropDown key={data.id} {...data} handleChange={handleDropdown} />
    ))}

    <ScreenshotFormat handleChange={handleScreenshotQuality} />
  </>
);

export default General;
