// Bringing in the required import from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <NavLink key={1} className="navbar-brand header-link" to="/" activeclassName="active">
          Home
        </NavLink>,
        <NavLink key={2} className="navbar-brand header-link" to="/about" activeclassName="active">
          About
        </NavLink>,
        <NavLink key={3} className="navbar-brand header-link" to="/contact" activeclassName="active">
          Contact
        </NavLink>,
        <NavLink key={4} className="navbar-brand header-link" to="/portfolio" activeclassName="active">
          Portfolio
        </NavLink>,
        <NavLink key={5} className="navbar-brand header-link" to="/resume" activeclassName="active">
          Resume
        </NavLink>,
      ]}
    />
  );
}
