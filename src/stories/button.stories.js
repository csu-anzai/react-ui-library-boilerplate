import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { Button } from '../../dist/react-ui-library-boilerplate';
import buttonDocs from '../docs/button-docs.md';

storiesOf('Elements | Button', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('Default', () =>
		<Button
			classes={text('Button classes', 'color-primary size-reg')}
			disabled={boolean('Disabled', false)}
			onClick={action('button-click')}
		>
			{text('Button label', 'Test Button')}
		</Button>
		, {
			notes: { markdown: buttonDocs }
		}
	);