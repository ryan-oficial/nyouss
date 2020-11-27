import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import {Carousel, Jumbotron, Button, Col, Row, Container, Card} from 'react-bootstrap';


const Home = () => {
    return (
        <div>
            <Menu/>
            <Carousel> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.demae.go.gov.br/wp-content/uploads/2017/05/saiba.jpg"
                alt="First slide"
                />
                </Carousel.Item>
            </Carousel>
            <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary" href='/login'>Login</Button>
                    </p>
                    </Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                            
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                            </Col>

                            <Col>
                            
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                            </Col>

                            <Col>
                            
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Container>
            <Rodape/>
        </div>
    )
}

export default Home;