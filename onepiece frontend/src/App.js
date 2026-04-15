import Home from "./pages/Home";
import CreateCharacter from "./pages/CreateCharacter";
import ListCharacters from "./pages/ListCharacters";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <h1 className="text-center my-4" style={{ color: "#ffffff" }}>🏴‍☠️ One Piece 🏴‍☠️</h1>
      <Home />
      <CreateCharacter />
      <ListCharacters />
    </Container>
  );
}

export default App;