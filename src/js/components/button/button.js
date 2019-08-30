import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
	return(
    <button 
      className = { `ruilb-button ${props.classes}` }
      disabled = { props.disabled }
      onClick = { props.onClick }
    >
    { props.children }
    </button>
	)
}

Button.propTypes = {
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

Button.defaultProps = {
  disabled: false
}

export default Button;