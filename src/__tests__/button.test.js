import Button from '../js/components/button';

const createTestProps = props => {

	return {
		classes: 'inverted',
		onClick: () => console.log('button clicked'),
		...props
	};

};

describe('Button', () => {

	it('should render without crashing', () => {

		const props = createTestProps();

		shallow(
			<Button {...props} >Test button</Button>
		);

	});

});

describe('Button - rendering', () => {

	let props,
		component,
		onClickFunc;

	beforeAll(() => {

		onClickFunc = jest.fn();
		props = createTestProps({ onClick: onClickFunc });

		component = shallow(
			<Button {...props} >Test button</Button>
		);

	});

	it('should match snapshot', () => {

		expect(toJson(component)).toMatchSnapshot();

	});

	it('should render as a single button tag', () => {

		expect(component.find('button')).toHaveLength(1);

	});

	it('should have to correct class name applied', () => {

		expect(component.find('button.ruilb-button')).toHaveLength(1);

	});

	it('should output the correct class name when provied via "classes" prop', () => {

		expect(component.find('button.ruilb-button').hasClass('inverted')).toEqual(true);

	});

	it('should not be disabled by default', () => {

		expect(component.find('button.ruilb-button').prop('disabled')).toEqual(false);

	});

	it('should render as disabled when provided a "disabled={true}" prop', () => {

		component = shallow(<Button {...props} disabled={true} >Test button</Button>);
		expect(component.find('button.ruilb-button').prop('disabled')).toEqual(true);

	});

	it('should not render as disabled when provided a "disabled={false}" prop', () => {

		component = shallow(<Button {...props} disabled={false} >Test button</Button>);
		expect(component.find('button.ruilb-button').prop('disabled')).toEqual(false);

	});

	it('should render a correct button label when passed ', () => {

		expect(component.find('button.ruilb-button').prop('children')).toBe('Test button');

	});

	it('should fire a callback function onClick', () => {

		component.find('button.ruilb-button').simulate('click');
		expect(onClickFunc).toHaveBeenCalled();

	});

});