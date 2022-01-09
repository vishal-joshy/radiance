import React, { ChangeEvent, ReactElement } from "react";
import DropDown from "components/DropDown/DropDown";
import Layout from "components/Layout";
import { setGeneral, removeFromGeneral } from "store/general/generalSlice";
import { useAppDispatch } from "store/hooks";
import * as generalData from "data/general";
import DoubleSlider from "components/Slider/DoubleSlider";

function General(): ReactElement {
  const dispatch = useAppDispatch();

  const createKeyPair = (key: string, value: string | number) => {
    const result: any = {};
    result[key] = value;
    return result;
  };

  const handleDropdown = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "default") {
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

  return (
    <Layout>
      {generalData.dropdown.map(({ id, label, options }) => (
        <DropDown key={id} id={id} label={label} values={options} handleChange={handleDropdown} />
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
    </Layout>
  );
}

export default General;
