// Core
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';


// Higher-Order-Components
import withLazy from '../../hoc/Lazy/Lazy.hoc';


// Components
import AnimatedSwitch from '../../components/AnimatedSwitch/AnimatedSwitch.component';


// Views
const Login = withLazy(() => import('../Login/Login.view'));
const Landing = withLazy(() => import('../Landing/Landing.view'));


export interface IAppProps { };


const App: React.FC<IAppProps> = () => (
    <AnimatedSwitch>
        <Route path="/dashboard" component={Landing} />
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
    </AnimatedSwitch>
);


App.propTypes = {};
App.defaultProps = {};


export default App;