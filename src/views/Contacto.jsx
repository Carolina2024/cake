import { Container,Button,Form } from "react-bootstrap"; /* se importa componentes de bootstrap */

function Contacto() {
  return (
    <Container className="text-center pt-5">
      <h1 className="mb-4">Cuentanos, ¿en qué te podemos ayudar?</h1>
      <Form>
        {/* Formulario copiado de react bootstrap */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Contacto;
