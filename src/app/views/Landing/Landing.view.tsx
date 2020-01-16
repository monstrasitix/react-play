// Core
import * as React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';


// Higher-Order-Components
import withLazy from '../../hoc/Lazy/Lazy.hoc';


// Views
import Navbar from '../Navbar/Navbar.component';
import Sidebar from '../Sidebar/Sidebar.component';


const Customers = withLazy(() => import('../Customers/Customers.view'));
const Settings = withLazy(() => import('../Settings/Settings.view'));
const Catalogue = withLazy(() => import('../Catalogue/Catalogue.view'));
const Dashboard = withLazy(() => import('../Dashboard/Dashboard.view'));


export interface ILandingProps
{
    match: any;
};


export const Landing: React.FC<ILandingProps> = ({ match }) =>
{
    const location = useLocation();

    const [isOpen, setSidebar] = React.useState(true);


    const handleSidebarToggle = React.useCallback(
        () => setSidebar(value => !value),
        [isOpen],
    );


    return (
        <div className="landing columns is-gapless has-background-white-bis">
            <div className="column is-one-quarter has-background-grey-lighter">
                <Switch>
                    <Route component={Sidebar} />
                </Switch>
            </div>

            <div className="column">
                <Switch>
                    <Route
                        render={() => (
                        <Navbar handleSidebarToggle={handleSidebarToggle}/>
                        )}
                    />
                </Switch>

                <br />

                <AnimatePresence>
                    <Switch location={location} key={location.pathname}>
                        <Route path={`${match.path}/customers`} component={Customers} />
                        <Route path={`${match.path}/settings`} component={Settings} />
                        <Route path={`${match.path}/catalogue`} component={Catalogue} />
                        <Route render={Dashboard} />
                    </Switch>
                </AnimatePresence>
            </div>
        </div>
    );
};


Landing.propTypes = {};
Landing.defaultProps = {};


export default Landing;