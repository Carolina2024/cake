import { Route,Routes } from "react-router-dom"; /* se agrega para las rutas de la aplicacion */
import Navbar from "./components/Navbar"; /* se importa para la barra de navegacion */
import Home from "./views/Home"; /* se agrega para la pagina principal de la aplicacion */
import Contacto from "./views/Contacto"; /* se agrega para la pagina de contacto de la aplicacion */

function App() {
  return (
    <div>
      <Navbar />
      {/* renderiza el componente Navbar, que contiene la barra de navegacion, sirve para cambiar entre paginas */}
      <Routes>
        {/* son dos rutas en la aplicacion */}
        <Route path="/" element={<Home />} />
        {/* ruta principal, pagina de inicio */}
        <Route path="/contacto" element={<Contacto />} />
        {/* ruta pagina de contacto cuando la URL es "/contacto" en vista Contacto*/}
      </Routes>
    </div>
  );
}

export default App;
