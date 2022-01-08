import React, { ReactElement, useState } from "react";
import { useAppSelector } from "store/hooks";
import { fileGen } from "utilities/fileGen";

interface Props {}

function TextBox({}: Props): ReactElement {
  const [downloadLinkVisibility, setDownloadLinkVisibility] = useState(false);
  const generalData = useAppSelector((state) => state.general);
  const videoData = useAppSelector((state) => state.video);
  const generalKeys = Object.keys(generalData.data);
  const generalStaticData = generalKeys.map((key) => `${key}=${generalData.data[key]}`);
  const videoKeys = Object.keys(videoData.data);
  const videoStaticData = videoKeys.map((key) => `${key}=${videoData.data[key]}`);

  const staticText = {
    downloadLink: "Download",
    generate: "Generate",
  };

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
        cols={50}
        rows={25}
        value={generalStaticData.join("\n") + "\n" + videoStaticData.join("\n")}
      ></textarea>
      <div className="textButton">
        <button className="textButton__generate" onClick={generateFile}>
          {staticText.generate}
        </button>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <a
          className="textBUtton__download"
          href="#"
          download={"mpv.conf"}
          id="download-link"
          style={downloadLinkVisibility ? { visibility: "visible" } : { visibility: "hidden" }}
        >
          {staticText.downloadLink}
        </a>
      </div>
    </div>
  );
}

export default TextBox;
