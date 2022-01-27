const yesNoOption = { default: '', yes: 'yes', no: 'no' };

const dropdown = [
  {
    id: 'priority',
    label: 'Priority',
    options: {
      default: '',
      high: 'high',
      abovenormal: 'abovenormal',
      normal: 'normal',
      belownormal: 'belownormal',
      idle: 'idle',
    },
  },
  {
    id: 'keep-open',
    label: 'Keep Open',
    options: yesNoOption,
  },
  {
    id: 'border',
    label: 'Window Border',
    options: yesNoOption,
  },
  {
    id: 'title',
    label: 'Window Title',
    options: { default: '', Filename: '${filename}', MediaTitle: '${media-title}' },
  },
];

const doubleSlider = [
  {
    firstLabel: 'Geometry X',
    secondLabel: 'Geometry Y',
    id: 'geometry',
    getValue: function (firstValue: number, secondValue: number) {
      return `${firstValue}%:${secondValue}%`;
    },
  },
  {
    firstLabel: 'Autofit Width',
    secondLabel: 'Autofit Height',
    id: 'autofit-larger',
    getValue: function (firstValue: number, secondValue: number) {
      return `${firstValue}%x${secondValue}%`;
    },
  },
];

const miscData = [
  {
    id: 'save-position',
    label: 'Save Position',
    options: { default: '', yes: 'save-position-on-quit', no: '' },
  },
  {
    id: 'on-top',
    label: 'On Top',
    options: { default: '', yes: 'ontop', no: '' },
  },
  {
    id: 'screensaver',
    label: 'Screensaver',
    options: { default: '', on: 'no-stop-screensaver', off: 'stop-screensaver' },
  },
];
const screenShot = {
  textInput: {
    id: 'screenshot-directory',
    label: 'Path',
  },
  dropdown: [
    {
      id: 'screenshot-template',
      label: 'Template',
      options: {
        default: '',
        'playback-time': '%F-%wHh%wMm%wSs%wTt',
        'date-time': '%F-%ty-%tm-%td_%tH.%tM.%tS.%wT',
        numbered: '%F-%n',
      },
    },
    {
      id: 'screenshot-tag-colorspace',
      label: 'Tag Colorspace',
      options: yesNoOption,
    },
  ],
};
export { dropdown, doubleSlider, miscData, screenShot };
