export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary ">
        <div className="header-left">
          <h1 className="m-3 " id="header-title"> Matt Smart</h1>
        </div>
        <div className="container-fluid baseline">
          <div className="collapse navbar-collapse shaded" id="navbarSupportedContent">
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
  