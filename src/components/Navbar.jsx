import { Link } from "react-router-dom"; /* se importa componente Link de react-router-dom, sirve para crear enlaces */
import { Navbar as BarraNav,Nav } from "react-bootstrap"; /* se renombra para evitar conflictos */

function Navbar() {
  return (
    /* se ocupa bootstrap */
    <BarraNav bg="danger" variant="dark">
      {/* fondo de color rojo y tema oscuro */}
      <Nav className="me-auto justify-evenly">
        {/* para agrupar elementos */}
        <Link to="/" className="text-white text-decoration-none ms-4">
          {/* crear enlace de navegacion a la ruta "/" */}
          🏠 Home
        </Link>
        <Link to="/contacto" className="text-white ms-4 text-decoration-none">
          📒 Contacto
        </Link>
      </Nav>
      <BarraNav.Brand className="me-5">Happy Cake 🍰</BarraNav.Brand>
      {/* para la marca del Navbar */}
    </BarraNav>
  );
}

export default Navbar;
