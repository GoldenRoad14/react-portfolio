import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Nav({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);


  return (
    <nav className="navbar">
      <div className="header-left">
        <h1 className="header" id="header-title"> Matt Smart</h1>
        <h1 className="header" id="header-title-front"> Matt Smart</h1>
      </div>
      <div className="header-right">
        <div className="shaded">
        <div className='burgerBox'>
                        <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
                    </div>
                    <ul className={`nav-links ${isOpen ? 'open' : 'closed'}`}>
                    {links.map((link, index) => (
                <li key={index} onClick={closeMenu} className="nav-item">
                  {link}
                </li>
              ))}
            </ul>
        </div>
      </div>
    </nav>
  );
}


