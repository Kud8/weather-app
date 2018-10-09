import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const NavigationButton = (props) => {
    const {text, disabled} = props;

    return (
        <button className="navigation-button" disabled={disabled} onClick={() => props.onClick(text)}>
            {text}
        </button>
    )
}
  
NavigationButton.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default NavigationButton;