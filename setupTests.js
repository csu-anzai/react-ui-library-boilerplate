import React from 'react';
import { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Expose React and Enzyme functions as globals for all test files, removing the need to import on each
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;