import { useState } from "react";
import { crearPersonaje } from "../services/api";
import { Form, Button, Card } from "react-bootstrap";

function CreateCharacter() {
  const [personaje, setPersonaje] = useState({
    nombre: "",
    identificacion: "",
    imagen: "",
    rol: "",
    descripcion: "",
    fechaCreacion: "",
  });

  const handleChange = (e) => {
    setPersonaje({
      ...personaje,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearPersonaje(personaje);
    alert("Personaje creado");
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <h2 className="mb-3">Crea el Personaje</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Control name="nombre" placeholder="Nombre" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control name="identificacion" placeholder="ID" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control name="imagen" placeholder="URL Imagen" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control name="rol" placeholder="Rol" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Control name="descripcion" placeholder="Descripción" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="datetime-local" name="fechaCreacion" onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CreateCharacter;