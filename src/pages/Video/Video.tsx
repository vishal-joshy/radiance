import React, { ChangeEvent, ReactElement } from "react";
import DropDown from "../../components/DropDown/DropDown";
import Layout from "../../components/Layout";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removeFromVideo, setVideo } from "../../store/video/videoSlice";

const videoTemplate = {
  video: {
    id: "vo",
    label: "Driver",
    options: ["default", "gpu", "gpu-hq", "direct3d", "vaapi", "caca"],
  },
};

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
      <DropDown
        id={videoTemplate.video.id}
        label={videoTemplate.video.label}
        values={videoTemplate.video.options}
        handleChange={handleChange}
      />
    </Layout>
  );
}

export default Video;
