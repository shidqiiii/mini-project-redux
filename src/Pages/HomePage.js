import { Carousel, Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'
import '../css/Homepage.css';
import { carouselItem, cardItem } from "../Components/Homepage/data"

export default function HomePage() {
    return (
        <Container>
            <Carousel className='mt-5'>
                {carouselItem.map((e) => (
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block h-100 w-100"
                            src={"./Images/Carousel/" + e.src}
                            alt={e.alt}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            <Row xs={1} md={2} lg={4} className="g-4 my-5 text-center">
                {cardItem.map((e) => (
                    <Col>
                        <Card style={{ minHeight: "390px" }} as={Link} to="/product">
                            <Card.Img variant="top" src={e.image} />
                            <Card.Body>
                                <Card.Title>IDR {e.price.toLocaleString("id-ID")}</Card.Title>
                                <Card.Text>{e.name}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
