import React from 'react';
import NavigationButton from '../../components/NavigationButton';
import './index.scss';

const ButtonContainer = () => {
    return (
        <div className="button-container">
            <NavigationButton text={'Today'} disabled={true} />
            <NavigationButton text={'Week'} onClick={console.log} />
        </div>
    )
}

export default ButtonContainer;