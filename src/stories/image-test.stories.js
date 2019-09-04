import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { ImageTest } from '../../dist/react-ui-library-boilerplate';

storiesOf('Elements | ImageTest', module)
	.addDecorator(centered)
	.add('Default', () =>
		<ImageTest />
	);