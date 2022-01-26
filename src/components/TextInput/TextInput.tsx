import React from 'react';

interface Props {
  label: string;
  id: string;
}

function TextInput({ label, id }: Props) {
  return (
    <div>
      <label htmlFor=''>{label}</label>
      <input type='text' id={id} />
    </div>
  );
}

export default TextInput;
