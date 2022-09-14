import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import TopBar from "./components/TopBar";
import Plan from "./components/Plan";
import Plans from "./views/Plans";

function App() {
  return (
    <Container>
      <TopBar></TopBar>
      <br />
      <br />
      <br />
      <CardGroup>
        <Plans />
      </CardGroup>
    </Container>
  );
}

export default App;
