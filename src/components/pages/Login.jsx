import {Row, Col, Form, Button} from "react-bootstrap";
const Login = () => {
    return (
        
        <section className="container">
            <h1>Formulario</h1>
            <Row xs={1} md={2}>
                <Col>
                 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa un email" />
        <Form.Text className="text-danger">
          Este es un mensaje de error
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
        <Form.Text className="text-danger">
          Este es un mensaje de error
        </Form.Text>
        </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
                </Col>
                <Col>
                <img src="https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg" alt="cafe" className="w-100" />
                </Col>
            </Row>
        </section>
    );
};

export default Login;