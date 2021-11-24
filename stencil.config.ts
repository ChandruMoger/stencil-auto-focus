import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss'

import tailwindcss  from 'tailwindcss';

export const config: Config = {
  namespace: 'test-auto-focus',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins:[
    postcss({
      plugins: [
        tailwindcss('./tailwind.config.js')
      ]
    })
  ]
};
