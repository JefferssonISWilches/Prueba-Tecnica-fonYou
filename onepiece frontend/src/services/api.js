const API_URL = "http://localhost:8080/personajes";

export const crearPersonaje = async (personaje) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personaje),
  });

  return response.json();
};

export const obtenerPersonajes = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const actualizarPersonaje = async (id, personaje) => {
  const response = await fetch(`http://localhost:8080/personajes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personaje),
  });

  return response.json();
};