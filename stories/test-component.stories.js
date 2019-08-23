import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../src/scss/styles.scss';

import TestComponent from '../src/components/test-component';

storiesOf('Test Component', module)
  .add('default', () => <TestComponent />)