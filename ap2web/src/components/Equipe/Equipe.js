import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Equipe = () => {
    return (
        <Container className="my-5">
            <h3 className="text-center mb-4">Equipe</h3>
            <Row className="justify-content-center">
                <Col md={6} lg={4} className="mb-3">
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="text-primary">
                                Elpidio Viana Cabral Neto
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                536369
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-3">
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title className="text-primary">
                                Márcio Alexandre Martins Almeida Jr.
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                536040
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Equipe;
