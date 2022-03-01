const dropdown = [
  {
    id: 'demuxer-thread',
    label: 'Thread',
    options: {
      default: '',
      yes: 'yes',
      no: 'no',
    },
  },
];
const youTube = {
  dropdown: [
    {
      id: 'ytdl',
      label: 'youtube-dl',
      options: {
        default: '',
        yes: 'yes',
        no: '',
      },
    },
    {
      id: 'ytdl-format',
      label: 'Quality',
      options: {
        default: '',
        best: 'bestvideo[ext=mp4][width<=1920][height<=1080]+bestaudio[ext=m4a]/best[ext=mp4]/best',
        good: 'bestvideo[ext=webm][height<=?720]',
        worst: 'worst',
      },
    },
  ],
};
const cache = {
  id: 'cache',
  label: 'Cache',
  options: {
    default: '',
    auto: 'auto',
    yes: 'yes',
    no: 'no',
    worst: 'worst',
  },
};

export { dropdown, youTube, cache };
