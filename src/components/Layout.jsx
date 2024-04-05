import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LogoutModal from "./LogoutModal";

export default function Layout() {
    return (
        <>
            <Navbar sticky='top' bg='light' style={{ fontWeight: "bold" }}>
                <Container>
                    <Navbar.Brand href="/">
                        <i className="bi bi-cup-hot" style={{ fontSize: 25, color: "dodgerblue" }}></i>
                        SomeBar
                    </Navbar.Brand>
                    <Nav className="me-4">
                        <Nav.Link href="/reservations">
                            Reservations
                        </Nav.Link>
                        <Nav.Link className="me-3" href="/">
                            Book Now!
                        </Nav.Link>
                        <Nav>
                            <LogoutModal />
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}