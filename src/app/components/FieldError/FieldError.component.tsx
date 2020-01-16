// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';


export interface IFieldErrorProps {
    children?: React.ReactChildren;
};


const FieldError: React.FC<IFieldErrorProps> = ({ children }) => (
    <span
        className="help is-error"
        children={children}
    />
);


FieldError.propTypes = {
    children: PropTypes.any,
};


FieldError.defaultProps = {
    children: undefined,
};


export default FieldError;