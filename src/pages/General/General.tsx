import React, { ReactElement, useState } from "react";
import { setGeneral } from "../../store/general/generalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

interface Props {}

function General({}: Props): ReactElement {
  const dispatch = useAppDispatch();

  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    setText(e.target.value);
    dispatch(setGeneral(e.target.value));
  };

  return (
    <div>
      Priority:
      <input type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
}

export default General;
