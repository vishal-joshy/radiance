const dropdown = [
  {
    id: "vo",
    label: "Driver",
    options: {
      default: "",
      gpu: "gpu",
      "gpu-hq": "gpu-hq",
      direct3d: "direct3d",
      vappi: "vaapi",
      caca: "caca",
    },
  },
  {
    id: "gui-api",
    label: "Driver Api",
    options: { default: "", opengl: "opengl", vulkan: "vulkan", d3d11: "d3d11" },
  },
];

export { dropdown as videoData };
