import logo from "../../../img/logo.jpg";
const NavbarDesktop = () => {
  return (
    <>
      <nav className="navbarDesktop">
        <div className="navbarDesktop__logo">
          <img src={logo}></img>
        </div>
        <ul className="navbarDesktop__lista">
          <li>
            <h3>Inicio</h3>
            <div className="navbarDesktop__lista__div" />
          </li>
          <li>
            <h3>Zonas</h3>
            <div className="navbarDesktop__lista__div" />
          </li>
          <li>
            <h3>Productos</h3>
            <div className="navbarDesktop__lista__div" />
          </li>
          <li>
            <h3>Contacto</h3>
            <div className="navbarDesktop__lista__div" />
          </li>
          <li>
            <h3>Ofertas</h3>
            <div className="navbarDesktop__lista__div" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarDesktop;
