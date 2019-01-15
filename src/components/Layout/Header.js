import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const Header = (props) => {
const {branding} = props;  
    return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
        <div className="container">
            <Link to="/" className="navbar-brand">{branding}</Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                    <i className="fa fa-home pr-1"></i> 
                    Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                    <i className="fa fa-info pr-1"></i> 
                    About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact/add" className="nav-link">
                    <i className="fa fa-plus pr-1"></i> 
                    Add</Link>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

Header.defaultProps = {
    branding: "My App"
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

export default Header;