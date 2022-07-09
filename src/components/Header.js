import { Navbar, Container, Nav} from "react-bootstrap"

const Header = () => {
    return (
        <div>
        <Navbar variant="white">
            <Container>
                <Navbar.Brand href="/">QUEZ DRAMA</Navbar.Brand>
                <Nav>
                <Nav.Link href="#hot drama">HOT DRAMA</Nav.Link>
                <Nav.Link href="#drakor">DRAMA KOREA</Nav.Link>
                <Nav.Link href="#dracin">DRAMA CINA</Nav.Link>
                <Nav.Link href="#turki">DRAMA TURKI</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
    )
}
export default Header