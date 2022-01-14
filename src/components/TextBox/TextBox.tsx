import React, { ReactElement, useState } from "react";
import { useAppSelector } from "store/hooks";
import { fileGen } from "utilities/fileGen";

interface Props {}

const getStringValue = (data:any,callback:any)=>{
    const keys = Object.keys(data);
    return keys.map(callback).join("\n");
}

function TextBox({}: Props): ReactElement {
  const [downloadLinkVisibility, setDownloadLinkVisibility] = useState(false);
  const generalData = useAppSelector((state) => state.general);
  const videoData = useAppSelector((state) => state.video);

  const generalMainData= getStringValue(generalData.main,((key:any) => `${key}=${generalData.main[key]}`))
  const generalMiscData= getStringValue(generalData.misc,((key:any) => generalData.misc[key]))
  const videoMainData= getStringValue(videoData.main,((key:any) => `${key}=${videoData.main[key]}`))

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
        value={
          generalMainData +
          "\n" +
          generalMiscData +
          "\n" +
          videoMainData
        }
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
