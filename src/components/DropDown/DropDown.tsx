import React, { ChangeEvent, ReactElement } from "react";

interface Props {
  id: string;
  values: string[];
  handleChange(e: ChangeEvent<HTMLSelectElement>): void;
}

function DropDown({ id, values, handleChange }: Props): ReactElement {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <select name={id} id={id} onChange={(e) => handleChange(e)}>
        {values.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </>
  );
}

export default DropDown;
