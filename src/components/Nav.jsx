import { NavLink } from 'react-router-dom';
import Navbar from './UI/Navbar';

import './UI/header.css';

export default function Nav() {
  return (
    <Navbar
      links={[
        // <NavLink key={1} className="navbar-brand header-link" to="/" activeclassname="active">
        //   Home
        // </NavLink>,
        <NavLink key={2} className="navbar-brand header-link" to="/" activeclassname="active">
          About
        </NavLink>,
        <NavLink key={3} className="navbar-brand header-link" to="/contact" activeclassname="active">
          Contact
        </NavLink>,
        <NavLink key={4} className="navbar-brand header-link" to="/portfolio" activeclassname="active">
          Portfolio
        </NavLink>,
        // <NavLink key={5} className="navbar-brand header-link" to="/resume" activeclassname="active">
        //   Resume
        // </NavLink>,
      ]}
    />
  );
}
