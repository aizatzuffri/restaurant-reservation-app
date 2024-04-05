import { Button, Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";

export default function HomePage() {
    return (
        <>
            <Layout />
            <Row>
                <Col>
                    <Container className="p-4 text-center">
                        <i className="bi bi-cup-hot" style={{ fontSize: 50, color: "dodgerblue" }}></i>
                        <p className="mb-5" style={{ fontWeight: "bold" }}>
                            SomeBar
                        </p>
                        <p className="mt-5" style={{ fontSize: 64 }}>Welcome to SomeBar</p>
                        <h2 className="my-5" style={{ fontSize: 31 }}>Get Some</h2>
                        <Col>
                            <Container sm={5} className="d-grip gap-2">
                                <p className="mt-5" style={{ fontSize: 17 }}>
                                    Click here to login or sign up
                                </p>
                                <Button href="/login" variant="outline-primary">
                                    Login/Sign Up
                                    <i className="bi bi-box-arrow-in-right"></i>
                                </Button>


                            </Container>
                        </Col>
                    </Container>
                </Col>
            </Row>
        </>
    )
}