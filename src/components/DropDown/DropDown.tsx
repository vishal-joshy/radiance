import React, { ChangeEvent, ReactElement } from "react";

interface Props {
  id: string;
  label: string;
  values: string[];
  handleChange(e: ChangeEvent<HTMLSelectElement>): void;
}

function DropDown({ id, values, label, handleChange }: Props): ReactElement {
  return (
    <div className={style.container}>
      <label  htmlFor={id}>{label}</label>
      <select className={style.select} name={id} id={id} onChange={(e) => handleChange(e)}>
        {values.map((value,index) => (
          <option key={index} value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
}
const style={
  container:"flex justify-between p-2 2-80",
  select:"w-40 ml-6 bg-white border"
}

export default DropDown;
