import React, { ReactElement, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { fileGen } from "../../utilities/fileGen";

interface Props {}

function TextBox({}: Props): ReactElement {
  const [downloadLinkVisibility, setDownloadLinkVisibility] = useState(false);

  const generalData = useAppSelector((state) => state.general);

  const generateFile = () => {
    const textField: any = document.querySelector("#text-field");
    const file = fileGen(textField.value, "text/plain");
    const downloadLink: any = document.querySelector("#download-link");
    downloadLink.href = URL.createObjectURL(file);
    setDownloadLinkVisibility(true);
  };

  return (
    <div>
      <textarea
        name="raw-data"
        id="text-field"
        readOnly
        cols={30}
        rows={10}
        value={"general:" + generalData.priority}
      ></textarea>
      <button onClick={generateFile}>Generate</button>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        download={"mpv.conf"}
        id="download-link"
        style={downloadLinkVisibility ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        Download
      </a>
    </div>
  );
}

export default TextBox;
