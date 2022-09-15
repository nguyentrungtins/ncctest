const Navbar = () => {
  return (
    <div>
      <aside className="sidebar">
        <nav className="menu">
          <ul>
            <li>
              <a href="" className="menu-item">
                <span className="menu-icon fa fa-home"> </span>
                <span className="menu-label"> Home </span>
              </a>
            </li>
            <li>
              <a href="" className="active menu-item">
                <span className="menu-icon fa fa-toolbox"></span>
                <span className="menu-label"> Services </span>
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
                <span className="menu-icon fas fa-newspaper"></span>
                <span className="menu-label"> News </span>
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
                <span className="menu-icon fa fa-book"></span>
                <span className="menu-label"> Blog </span>
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
                <span className="menu-icon far fa-address-book"></span>
                <span className="menu-label"> Contact </span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};
export default Navbar;
