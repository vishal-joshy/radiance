import React, { ChangeEvent, ReactElement } from "react";
import DropDown from "components/DropDown/DropDown";
import Layout from "components/Layout";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { removeFromVideo, setVideo } from "store/video/videoSlice";
import { videoData } from "data/video";

function Video(): ReactElement {
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "default") {
      dispatch(removeFromVideo(e.target.id));
    } else {
      const result: any = {};
      result[e.target.id] = e.target.value;
      dispatch(setVideo(result));
    }
  };

  return (
    <Layout>
      {videoData.map(({id,label,options}) => (
          <DropDown key={id} id={id} label={label} values={options} handleChange={handleChange} />
      ))}
    </Layout>
  );
}

export default Video;
