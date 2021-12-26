import React, { ChangeEvent, ReactElement, useState } from "react";
import DropDown from "../../components/DropDown/DropDown";
import Layout from "../../components/Layout";
import { setGeneral, removeFromGeneral } from "../../store/general/generalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const yesNoOption = ["default", "yes", "no"];

const generalTemplate = {
  priority: {
    id: "priority",
    options: ["default", "high", "abovenormal", "normal", "belownormal", "idle"],
  },
  keepOpen: {
    id: "keep-open",
    options: yesNoOption,
  },
  windowBorder: {
    id: "border",
    label: "Window Border",
    options: yesNoOption,
  },
};

function General(): ReactElement {
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
    <Layout>
      <DropDown
        id={generalTemplate.priority.id}
        label={generalTemplate.priority.id}
        values={generalTemplate.priority.options}
        handleChange={handleChange}
      />
      <DropDown
        id={generalTemplate.keepOpen.id}
        label={generalTemplate.keepOpen.id}
        values={generalTemplate.keepOpen.options}
        handleChange={handleChange}
      />
      <DropDown
        id={generalTemplate.windowBorder.id}
        label={generalTemplate.windowBorder.label}
        values={generalTemplate.windowBorder.options}
        handleChange={handleChange}
      />
    </Layout>
  );
}

export default General;
