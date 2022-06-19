import { Carousel, Container } from 'react-bootstrap'
import React from 'react'
import '../css/Homepage.css'
import ProductCard from '../Components/ProductCard';

export default function HomePage() {
    const carouselItem = [{
        "src": "carousel1.png",
        "alt": "First slide"
    }, {
        "src": "carousel2.png",
        "alt": "Second slide"
    }, {
        "src": "carousel3.png",
        "alt": "Third slide"
    }]

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

            <ProductCard />
        </Container>
    )
}
