const yesNoOption = ["default", "yes", "no"];

const dropdown = [
  {
    id: "priority",
    label: "Priority",
    options: ["default", "high", "abovenormal", "normal", "belownormal", "idle"],
  },
  {
    id: "keep-open",
    label: "Keep Open",
    options: yesNoOption,
  },
  {
    id: "border",
    label: "Window Border",
    options: yesNoOption,
  },
];

export {dropdown as generalData};