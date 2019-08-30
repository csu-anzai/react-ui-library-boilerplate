import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
	return(
    <button 
      { ...props.classes ? { className : `ruilb-button ${props.classes}` } : { className: "ruilb-button" } }
      { ...props.disabled ? { disabled: true } : null }
      { ...props.onClick ? { onClick: props.onClick} : null }
    >
    {props.children}
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