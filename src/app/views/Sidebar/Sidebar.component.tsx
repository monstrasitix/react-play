// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';


// Components
import Icon from '../../components/Icon/Icon.component';


export interface ISidebarProps {
    match: {
        url: string;
    };
};


const Sidebar: React.FC<ISidebarProps> = ({ match }) => (
    <section className="section">
        <aside className="menu">
            <p className="menu-label">General</p>

            <ul className="menu-list">
                <li>
                    <NavLink to={match.url} className="menu-link">
                        <span className="icon">
                            <Icon type="home" />
                        </span>
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`${match.url}/catalogue`} className="menu-link">
                        <span className="icon">
                            <Icon type="list" />
                        </span>
                        <span>Catalogue</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`${match.url}/customers`} className="menu-link">
                        <span className="icon">
                            <Icon type="users" />
                        </span>
                        <span>Customers</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={`${match.url}/settings`} className="menu-link">
                        <span className="icon">
                            <Icon type="cog" />
                        </span>
                        <span>Settings</span>
                    </NavLink>
                </li>
            </ul>

            <Link to="/login" className="button primary">
                Logout
            </Link>
        </aside>
    </section>
);


Sidebar.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string.isRequired,
    }).isRequired,
};


Sidebar.defaultProps = {};


export default Sidebar;