import React, { ChangeEvent, ReactElement } from "react";
import DropDown from "components/DropDown/DropDown";
import Layout from "components/Layout";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { removeFromVideo, setVideo } from "store/slices/videoSlice";
import { videoData } from "data/video";
import { createKeyPair } from "utilities/string";

function Video(): ReactElement {
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      dispatch(removeFromVideo(e.target.id));
    } else {
      const result = createKeyPair(e.target.id, e.target.value);
      dispatch(setVideo(result));
    }
  };

  return (
    <Layout>
      {videoData.map(({ id, label, options }) => (
        <DropDown key={id} id={id} label={label} options={options} handleChange={handleChange} />
      ))}
    </Layout>
  );
}

export default Video;
