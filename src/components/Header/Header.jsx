import {Container, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
  return (
    <>
    <div style = {{marginBottom : "20px"}}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ToDo App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    </>
  );
};
export default Header;
