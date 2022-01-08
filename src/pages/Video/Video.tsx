import React, { ChangeEvent, ReactElement } from "react";
import DropDown from "@components/DropDown/DropDown";
import Layout from "@components/Layout";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { removeFromVideo, setVideo } from "@store/video/videoSlice";

const videoTemplate = {
  driver: {
    id: "vo",
    label: "Driver",
    options: ["default", "gpu", "gpu-hq", "direct3d", "vaapi", "caca"],
  },
  driverApi: {
    id: "gui-api",
    label: "Driver Api",
    options: ["default", "opengl", "vulkan", "d3d11"],
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
        id={videoTemplate.driver.id}
        label={videoTemplate.driver.label}
        values={videoTemplate.driver.options}
        handleChange={handleChange}
      />
      <DropDown
        id={videoTemplate.driverApi.id}
        label={videoTemplate.driverApi.label}
        values={videoTemplate.driverApi.options}
        handleChange={handleChange}
      />
    </Layout>
  );
}

export default Video;
