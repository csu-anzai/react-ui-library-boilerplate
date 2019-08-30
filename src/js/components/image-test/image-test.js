import React from 'react';
const ImageUrl = require('../src/assets/react-logo.svg');

const ImageTest = props => {

  const imgStyles = {
    display: "block",
    margin: '0px auto',
  }

  return(
    <React.Fragment>
      <img style={imgStyles} src={ImageUrl} alt="React logo" width="200"/>
      <p>If you see an image, Webpack has been able to copy the asset and resolve the URL</p>
    </React.Fragment>
  );
}

export default ImageTest;