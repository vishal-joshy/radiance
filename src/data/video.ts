const dropdown = [
  {
    id: 'vo',
    label: 'Driver',
    options: {
      default: '',
      gpu: 'gpu',
      'gpu-hq': 'gpu-hq',
      direct3d: 'direct3d',
      vappi: 'vaapi',
      caca: 'caca',
    },
  },
  {
    id: 'gui-api',
    label: 'Driver Api',
    options: { default: '', opengl: 'opengl', vulkan: 'vulkan', d3d11: 'd3d11' },
  },
  {
    id: 'hwdec',
    label: 'HW Decoder',
    options: {
      default: '',
      yes: 'yes',
      no: 'no',
      auto: 'auto',
      'auto-copy': 'auto-copy',
      'auto-safe': 'auto-safe',
      crystalhd: 'crystalhd',
      cuda: 'cuda',
      'cuda-copy': 'cuda-copy',
      d3d11va: 'd3d11va',
      'd3d11va-copy': 'd3d11va-copy',
      dxva2: 'dxva2',
      'dxva2-copy': 'dxva2-copy',
      nvdec: 'nvdec',
      'nvdec-copy': 'nvdec-copy',
    },
  },
];

export { dropdown as videoData };
