import { useEffect, useState } from "react";
import { obtenerPersonajes, actualizarPersonaje } from "../services/api";
import { Card, Button, Modal, Form } from "react-bootstrap";

function ListCharacters() {
  const [personajes, setPersonajes] = useState([]);
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
  const [editando, setEditando] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    cargarPersonajes();
  }, []);

  const cargarPersonajes = async () => {
    const data = await obtenerPersonajes();
    setPersonajes(data);
  };

  const eliminarPersonaje = async (id) => {
    await fetch(`http://localhost:8080/personajes/${id}`, {
      method: "DELETE",
    });
    cargarPersonajes();
  };

  const abrirModal = (p) => {
    setPersonajeSeleccionado(p);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
    setEditando(false);
  };

  const limpiarModal = () => {
    setPersonajeSeleccionado(null);
  };

  const guardarCambios = async () => {
    await actualizarPersonaje(
      personajeSeleccionado.id,
      personajeSeleccionado
    );
    await cargarPersonajes();
    cerrarModal();
  };

  return (
    <div>
      <h2 className="mb-3" style={{ color: "#ffffff" }}>Tu Lista de Personajes</h2>

      {/* GRID CARDS */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {personajes.map((p) => (
          <Card key={p.id} style={{ width: "18rem" }}>
            {p.imagen && (
              <Card.Img
                variant="top"
                src={p.imagen}
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            )}

            <Card.Body
              style={{ cursor: "pointer" }}
              onClick={() => abrirModal(p)}
            >
              <Card.Title>{p.nombre}</Card.Title>
              <Card.Text>
                <strong>Rol:</strong> {p.rol}
              </Card.Text>
              <Card.Text>{p.descripcion}</Card.Text>

              <Button
                variant="danger"
                onClick={(e) => {
                  e.stopPropagation();
                  eliminarPersonaje(p.id);
                }}
              >
                Eliminar
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* MODAL */}
      <Modal
        show={showModal}
        onHide={cerrarModal}
        onExited={limpiarModal}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Form.Control
              value={personajeSeleccionado?.nombre || ""}
              disabled={!editando}
              onChange={(e) =>
                setPersonajeSeleccionado({
                  ...personajeSeleccionado,
                  nombre: e.target.value,
                })
              }
            />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            <strong>ID:</strong> {personajeSeleccionado?.identificacion}
          </p>

          <Form.Group className="mb-2">
            <Form.Label>Rol</Form.Label>
            <Form.Control
              value={personajeSeleccionado?.rol || ""}
              disabled={!editando}
              onChange={(e) =>
                setPersonajeSeleccionado({
                  ...personajeSeleccionado,
                  rol: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              value={personajeSeleccionado?.descripcion || ""}
              disabled={!editando}
              onChange={(e) =>
                setPersonajeSeleccionado({
                  ...personajeSeleccionado,
                  descripcion: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Imagen (URL)</Form.Label>
            <Form.Control
              value={personajeSeleccionado?.imagen || ""}
              disabled={!editando}
              onChange={(e) =>
                setPersonajeSeleccionado({
                  ...personajeSeleccionado,
                  imagen: e.target.value,
                })
              }
            />
          </Form.Group>

          {personajeSeleccionado?.imagen && (
            <img
              src={personajeSeleccionado.imagen}
              alt="personaje"
              style={{
                width: "100%",
                marginTop: "10px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          )}
        </Modal.Body>

        <Modal.Footer>
          {editando ? (
            <Button variant="success" onClick={guardarCambios}>
              Guardar
            </Button>
          ) : (
            <Button variant="warning" onClick={() => setEditando(true)}>
              Editar
            </Button>
          )}

          <Button variant="secondary" onClick={cerrarModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ListCharacters;