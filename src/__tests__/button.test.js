import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import Button from '../js/components/button';

describe('Button', () => {

	it('should render without crashing', () => {
		shallow(
			<Button
        classes="test-class"
        disabled={false}
        onClick={() => console.log('button clicked')}
      >
        Test button
      </Button>
		);
  });

});

describe('Button - default render', () => {

  let component,
      onClickFunc;

  beforeAll( () => {

    onClickFunc = jest.fn();

    component = shallow(
      <Button
          classes="inverted"
          onClick={onClickFunc}
        >
          Test button
        </Button>
    );

  });

  it('should match snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render as a button tag', () => {
    expect(component.type()).toBe('button');
  });

  it('should have to correct class name applied to the root node', () => {
    expect(component.at(0).hasClass('ruilb-button')).toEqual(true);
  });

  it('should output the correct class name when provied via "classes" prop', () => {
    expect(component.at(0).hasClass('inverted')).toEqual(true);
  });

  it('should not be disabled by default', () => {
    expect(component.at(0).is('[disabled]')).toEqual(false);
  });

  it('should render a correct button label when passed ', () => {
    expect(component.at(0).prop('children')).toBe('Test button');
  })

  it('should fire a callback function onClick', () => {
    component.simulate('click');
    expect(onClickFunc).toHaveBeenCalled();
  });

});

describe('Button - disabled', () => {

  let component;

  beforeAll( () => {

    component = shallow(
      <Button
        classes="test-class"
        disabled={true}
        onClick={() => console.log('button clicked')}
      >
        Test button
      </Button>
    );

  });

  it('should render as disabled when provided a "disabled={true}" prop', () => {
    expect(component.at(0).is('[disabled]')).toEqual(true);
  })

});