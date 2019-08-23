import React from 'react';

const ImageUrl = require('../src/assets/rollup-logo.svg');

const TestComponent = props => {
	return(
    <React.Fragment>
		  <p className="ruilb-test-component">Test component - it works!</p>
      <img src={ImageUrl} alt="Test Image"/>
    </React.Fragment>
	)
}

export default TestComponent;