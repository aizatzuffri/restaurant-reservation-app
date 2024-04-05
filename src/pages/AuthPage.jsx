import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import useLocalStorage from "use-local-storage";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const url = "https://a3b54030-dabb-480a-b38a-dc5d8535c382-00-1ch7xmpkl31ou.worf.replit.dev";

    const [modalShow, setModalShow] = useState(null);
    const handleShowSignUp = () => setModalShow("SignUp");
    const handleShowLogin = () => setModalShow("Login");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authToken, setAuthToken] = useLocalStorage("authToken", "");

    const navigate = useNavigate();

    useEffect(() => {
        if (authToken) {
            navigate("/reservations");
        }
    }, [authToken, navigate]);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${url}/signup`, { username, password });
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${url}/login`, { username, password });
            if (res.data && res.data.auth === true && res.data.token) {
                setAuthToken(res.data.token);
                console.log("Login was successful, token saved");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleClose = () => setModalShow(null);

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
                        <Col>
                            <Container sm={5} className="d-grip gap-2">
                                <Button className="rounded-pill" variant="outline-dark">
                                    <i className="bi bi-google"></i> Sign up with Google
                                </Button>
                                <p style={{ textAlign: "center" }}>or</p>
                                <Button className="rounded-pill" onClick={handleShowSignUp}>
                                    Create an account
                                </Button>
                                <p style={{ fontSize: "12px" }}>
                                    By signing up, you agree to the Terms of Service and Privacy Policy including Cookie Use
                                </p>

                                <p className="mt-5" style={{ fontWeight: "bold" }}>
                                    Already have an account?
                                </p>
                                <Button
                                    className="rounded-pill"
                                    variant="outline-primary"
                                    onClick={handleShowLogin}
                                >
                                    Sign In
                                </Button>

                            </Container>
                        </Col>
                    </Container>
                    <Modal
                        show={modalShow !== null}
                        onHide={handleClose}
                        animation={false}
                        centered
                    >
                        <Modal.Body>
                            <h2 className="mb-4" style={{ fontWeight: "bold" }}>
                                {modalShow === "SignUp"
                                    ? "Create your account"
                                    : "Log in to your account"}
                            </h2>
                            <Form
                                className="d-grid gap-2 px-5"
                                onSubmit={modalShow === "SignUp" ? handleSignUp : handleLogin}
                            >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <p style={{ fontSize: "12px" }}>
                                    By signing up, you agree to the Terms of Service and Privacy
                                    Policy, including Cookie Use. SomeBar may use your contact
                                    informations, including your email address and phone number for
                                    purposes outlined in our Privacy Policy, like keeping your account
                                    secure and personalising our services, including ads. Learn more.
                                </p>

                                <Button className="rounded-pill" type="submit">
                                    {modalShow === "SignUp" ? "Sign up" : "Log in"}
                                </Button>
                            </Form>
                        </Modal.Body>

                    </Modal>
                </Col>
            </Row>
        </>
    )
}