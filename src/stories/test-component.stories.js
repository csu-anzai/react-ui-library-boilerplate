import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import '../src/scss/storybook-styles.scss';

import { TestComponent } from '../../dist/react-ui-library-boilerplate';

storiesOf('Test Component', module)
  .add('Default', () => <TestComponent />)