import React, { ChangeEvent, ReactElement, useState } from "react";
import DropDown from "components/DropDown/DropDown";
import Layout from "components/Layout";
import { setGeneral, removeFromGeneral } from "store/general/generalSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { generalData } from "data/general";

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
      {generalData.map(({ id, label, options }) => (
        <DropDown key={id} id={id} label={label} values={options} handleChange={handleChange} />
      ))}
    </Layout>
  );
}

export default General;
