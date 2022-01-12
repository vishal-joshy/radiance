const yesNoOption = { default: "", yes: "yes", no: "no" };

const dropdown = [
  {
    id: "priority",
    label: "Priority",
    options: {
      default: "",
      high: "high",
      abovenormal: "abovenormal",
      normal: "normal",
      belownormal: "belownormal",
      idle: "idle",
    },
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
  {
    id: "title",
    label: "Window Title",
    options: { default: "", Filename: "${filename}", MediaTitle: "${media-title}" },
  },
];

const doubleSlider = [
  {
    firstLabel: "Geometry X",
    secondLabel: "Geometry Y",
    id: "geometry",
    getValue: function (firstValue: number, secondValue: number) {
      return `${firstValue}%:${secondValue}%`;
    },
  },
  {
    firstLabel: "Autofit Width",
    secondLabel: "Autofit Height",
    id: "autofit-larger",
    getValue: function (firstValue: number, secondValue: number) {
      return `${firstValue}%x${secondValue}%`;
    },
  },
];

export { dropdown, doubleSlider };
