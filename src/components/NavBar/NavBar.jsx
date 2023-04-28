import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" style={{display: 'flex'}}>
            <Container>
                <Navbar.Brand href="#home">QuíaStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Multimedia</Nav.Link>
                        <Nav.Link href="#link">Ropa</Nav.Link>
                        <Nav.Link href="#link">Accesorios</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto" style={{alignItems: 'center'}}>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar