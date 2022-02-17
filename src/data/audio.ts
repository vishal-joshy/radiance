const dropdown = [
  {
    id: 'ao',
    label: 'Driver',
    options: {
      default: '',
      wasapi: 'wasapi',
      oss: 'oss',
      jack: 'jack',
      openal: 'openal',
      pulse: 'pulse',
      sld: 'sdl',
      pcm: 'pcm',
      rsound: 'rsound',
      null: 'null',
    },
  },
  {
    id: 'audio-file-auto',
    label: 'Load Files',
    options: {
      default: '',
      no: 'no',
      exact: 'exact',
      fuzzy: 'fuzzy',
      all: 'all',
    },
  },
  {
    id: 'audio-channels',
    label: 'Channels',
    options: {
      default: '',
      'auto-safe': 'auto-safe',
      auto: 'auto',
      stereo: 'stereo',
      '5.1': '5.1',
      '7.1': '7.1',
    },
  },
  {
    id: 'audio-normalize-downmix',
    label: 'Normalize',
    options: {
      default: '',
      yes: 'yes',
      no: 'no',
    },
  },
  {
    id: 'audio-pitch-correction',
    label: 'Scale Tempo',
    options: {
      default: '',
      yes: 'yes',
      no: 'no',
    },
  },
];

export { dropdown };
