import { addParameters, configure, addDecorator } from '@storybook/react';
import '../src/scss/storybook-styles.scss';

addParameters(
  {
    options: {
      sortStoriesByKind: true,
    },
  },
);

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
