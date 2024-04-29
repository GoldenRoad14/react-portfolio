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



/* <div>
                    <div className='burgerBox'>
                        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <ul className={`nav-links ${isOpen ? 'open' : 'closed'}`}>
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        {!isLoggedIn ? (
                            <>
                                <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
                                <li><Link to="/signup" onClick={closeMenu}>SignUp</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/" onClick={handleLogOut}>Logout</Link></li>
                                <li><Link to="/profile" onClick={closeMenu}>Profile</Link></li>
                                <li><Link to="/planner" onClick={closeMenu}>Planner</Link></li>
                                <li><Link to="/tasks" onClick={closeMenu}>Tasks</Link></li>
                                <li><Link to="/community" onClick={closeMenu}>Social</Link></li>
                            </>
                        )}
                        <li><Link to="/how-it-works" onClick={closeMenu}>How It Works</Link></li>
                    </ul>
                </div> */






// export default function Nav({ links }) {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav className="navbar">
//       <div className="header-left">
//         <h1 className="header" id="header-title"> Matt Smart</h1>
//         <h1 className="header" id="header-title-front"> Matt Smart</h1>
//       </div>
//       <div className="header-right">
//         <div className="shaded">
//           <div className={`nav-center ${showMenu ? 'show-menu' : ''}`}>
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navspacing">
//               {links.map((link, index) => (
//                 <li key={index} className="nav-item">
//                   {link}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <button className="hamburger-icon" onClick={toggleMenu}>
//             <FontAwesomeIcon icon={faBars} />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }