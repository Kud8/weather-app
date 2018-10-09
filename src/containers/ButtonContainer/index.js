import React from 'react';
import NavigationButton from '../../components/NavigationButton';
import './index.scss';

const ButtonContainer = (props) => {
    return (
        <div className="button-container">
            <NavigationButton text={'Today'} disabled={true} />
            <NavigationButton text={'Week'} />
        </div>
    )
}

export default ButtonContainer;