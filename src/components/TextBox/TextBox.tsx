import React, { ReactElement, useState } from "react";
import { useAppSelector } from "store/hooks";
import { fileGen } from "utilities/fileGen";
import { getStringValue } from "utilities/string";

function TextBox(): ReactElement {
  const [downloadLinkVisibility, setDownloadLinkVisibility] = useState(false);
  const generalData = useAppSelector((state) => state.general);
  const videoData = useAppSelector((state) => state.video);
  const audioData = useAppSelector((state) => state.audio);
  const streamData = useAppSelector((state) => state.stream);

  const generalMainData = getStringValue(generalData.main, (key: any) => `${key}=${generalData.main[key]}`);
  const generalMiscData = getStringValue(generalData.misc, (key: any) => generalData.misc[key]);

  const generalDoubleSliderData = getStringValue(
    generalData.doubleSlider,
    (key: any) => `${key}=${generalData.doubleSlider[key].value}`
  );

  const videoMainData = getStringValue(videoData.main, (key: any) => `${key}=${videoData.main[key]}`);

  const audioMainData = getStringValue(audioData.main, (key: any) => `${key}=${audioData.main[key]}`);
  const streamMainData = getStringValue(streamData.main, (key: any) => `${key}=${streamData.main[key]}`);

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

  const settingsDisplay = (
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
        generalDoubleSliderData +
        "\n" +
        videoMainData +
        "\n" +
        audioMainData +
        "\n" +
        streamMainData
      }
    ></textarea>
  );
  return (
    <div>
      {settingsDisplay}
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
