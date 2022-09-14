import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TopBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Slack</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Product" id="basic-nav-dropdown"></NavDropdown>
          <Nav.Link href="#home">Solutions</Nav.Link>
          <Nav.Link href="#link">Enterprise</Nav.Link>
          <Nav.Link href="#link">Resources</Nav.Link>
          <Nav.Link href="#link">Pricing</Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#link">Sign in</Nav.Link>
          <Button variant="outline-success">TALK TO SALES</Button>
          <Button variant="success">TRY FOR FREE</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
