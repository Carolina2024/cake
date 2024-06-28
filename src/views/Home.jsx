import { Container } from "react-bootstrap"; /* se agrega para importar Container de bootstrap */

function Home() {
  return (
    /* se crea el Home con bootstrap */
    <Container className="text-center">
      {/* para envolver y centrar el contenido de Home */}
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
        {/* texto principal con negrita */}
      </h1>
      <h6> El lugar de los pasteles felices </h6> {/* texto con nivel 6 */}
      <p className="display-1">🎂</p> {/* emoji de torta con mayor tamaño */}
    </Container>
  );
}

export default Home;
