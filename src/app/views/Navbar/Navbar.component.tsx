// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';


// Components
import Icon from '../../components/Icon/Icon.component';


export interface INavbarProps
{
    handleSidebarToggle: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};


const Navbar: React.FC<INavbarProps> = ({ handleSidebarToggle }) => (
    <nav className="navbar is-light">
        <div className="container">
            <div className="navbar-menu is-active">
                <div className="navbar-start">
                    <div className="navbar-item">
                        <button
                            type="button"
                            className="button primary link"
                            onClick={handleSidebarToggle}
                        >
                            <Icon type="bars" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);


Navbar.propTypes = {
    handleSidebarToggle: PropTypes.func.isRequired,
};

Navbar.defaultProps = {};


export default Navbar;