import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { BackgroundImageTest } from '../../dist/react-ui-library-boilerplate';

storiesOf('BackgroundImageTest', module)
	.addDecorator(centered)
	.add('Default', () =>
		<BackgroundImageTest />
	);