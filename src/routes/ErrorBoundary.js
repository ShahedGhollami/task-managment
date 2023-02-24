import React, { Component } from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    componentDidCatch(error, info) {
        console.log(error, info);
        this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasError) {
            return (<>
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10}>
                            <Card style={{ marginTop: '25px' }}>
                                <Card.Body>
                                    <Row>
                                        <Col md={6} className="p-5 position-relative h400">
                                            <div style={{ position: 'relative', padding: 'inherit', textAlign: 'center' }}>
                                                <h1 style={{ fontWeight: 900 }}>Something </h1>
                                                <h1 style={{ fontWeight: 900 }}>Went Wrong</h1>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>);
        }
        return this.props.children;
    }
}
export default ErrorBoundary