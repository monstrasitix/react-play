// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Switch, useLocation } from 'react-router-dom';


export interface IAnimatedSwitchProps {
    children: any;
};


const AnimatedSwitch: React.FC<IAnimatedSwitchProps> = ({ children }) => {
    const location = useLocation();

    return (
        <Switch
            location={location}
            key={location.pathname}
        >
            {children}
        </Switch>
    );
};


AnimatedSwitch.propTypes = {
    children: PropTypes.any.isRequired,
};


AnimatedSwitch.defaultProps = {};


export default AnimatedSwitch;