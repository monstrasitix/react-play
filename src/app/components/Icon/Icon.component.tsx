// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';


export interface IIconProps {
    type: string;
    className?: string;
    [rest: string]: any;
};


const Icon: React.FC<IIconProps> = ({ type, className, ...rest }) => (
    <i className={`fa fa-${type} ${className} `} {...rest} />
);


Icon.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
};


Icon.defaultProps = {
    className: '',
};


export default Icon;