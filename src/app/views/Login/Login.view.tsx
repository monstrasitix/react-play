// Core
import * as React from 'react';


// Forms
import LoginFormContainer from '../../containers/Login/Login.container';


export interface ILoginProps {};


const Login: React.FC<ILoginProps> = () => (
    <div className="section">
        <div className="container narrow">
            <LoginFormContainer />
        </div>
    </div>
);


Login.propTypes = {};
Login.defaultProps = {};


export default Login;