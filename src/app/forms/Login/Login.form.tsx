// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';


// Components
import FieldError from '../../components/FieldError/FieldError.component';


export interface ILoginFormProps
{
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};


const LoginForm: React.FC<ILoginFormProps> = ({ handleSubmit }) => (
    <form className="form" onSubmit={handleSubmit}>
        <div className="field">
            <label className="label">Username</label>
            <div className="control">
                <Field type="text" name="username" className="input" />
                <ErrorMessage name="username" component={FieldError} />
            </div>
        </div>

        <div className="field">
            <label className="label">Password</label>
            <div className="control">
                <Field type="password" name="password" className="input" />
                <ErrorMessage name="password" component={FieldError} />
            </div>
        </div>

        <div className="field">
            <button type="submit" className="button is-block is-primary">
                Login
            </button>
        </div>
    </form>
);


LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};


LoginForm.defaultProps = {};


export default LoginForm;