// Core
import * as Yup from 'yup';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';


// Components
import LoginForm from '../../forms/Login/Login.form';


export interface ILoginContainerProps {};


export const validationSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
});


const LoginContainer: React.FC<ILoginContainerProps> = () => {
    const history = useHistory();


    const handleSubmit = React.useCallback(() => {
        history.push('/dashboard')
    }, []);


    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{
                username: '',
                password: '',
            }}
            onSubmit={handleSubmit}
        >
            {LoginForm}
        </Formik>
    );
};


LoginContainer.propTypes = {};
LoginContainer.defaultProps = {};


export default LoginContainer;