import React, { ReactElement } from "react";
import { useAppSelector } from "../../store/hooks";

interface Props {}

function TextBox({}: Props): ReactElement {
  const generalData = useAppSelector((state) => state.general);
  console.log(generalData);
  return (
    <div>
      <textarea
        name="raw-data"
        id=""
        readOnly
        cols={30}
        rows={10}
        value={"general:" + generalData.priority}
      ></textarea>
    </div>
  );
}

export default TextBox;
