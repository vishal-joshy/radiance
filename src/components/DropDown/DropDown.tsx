import React, { ChangeEvent, ReactElement } from "react";

interface Props {
  id: string;
  label: string;
  values: string[];
  handleChange(e: ChangeEvent<HTMLSelectElement>): void;
}

function DropDown({ id, values, label, handleChange }: Props): ReactElement {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} onChange={(e) => handleChange(e)}>
        {values.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </>
  );
}

export default DropDown;
