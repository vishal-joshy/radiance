import React, { ChangeEvent, ReactElement, useState } from "react";
import DropDown from "../../components/DropDown/DropDown";
import { setGeneral, removeFromGeneral } from "../../store/general/generalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

interface Props {}

function General({}: Props): ReactElement {
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "default") {
      dispatch(removeFromGeneral(e.target.id));
    } else {
      const result: any = {};
      result[e.target.id] = e.target.value;
      dispatch(setGeneral(result));
    }
  };

  return (
    <div>
      <DropDown
        id="priority"
        values={["default", "high", "abovenormal"]}
        handleChange={handleChange}
      />
      <DropDown id="saveposition" values={["default", "No", "Yes"]} handleChange={handleChange} />
      <DropDown id="keepopen" values={["default", "No", "Yes"]} handleChange={handleChange} />
    </div>
  );
}

export default General;
