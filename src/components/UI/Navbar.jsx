export default function Nav({ links }) {
    return (
      <nav className="navbar">
        <div className="header-left">
          <h1 className="header" id="header-title"> Matt Smart</h1>
          <h1 className="header" id="header-title-front"> Matt Smart</h1>
        </div>
        <div className="header-right">
          <div className="shaded">
            <div className="nav-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navspacing">
              {links.map((link) => link)}
            </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  