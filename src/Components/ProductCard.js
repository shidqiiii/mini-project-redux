import React, { Component } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class ProductCard extends Component {
    render() {
        return (
            <Row xs={1} md={2} lg={4} className="g-4 my-5 text-center">
                {this.props.productReducer.map((e) => (
                    <Col>
                        <Card className='product-card' style={{ minHeight: "440px" }} as={Link} to="/product">
                            <Card.Img variant="top" src={e.image} />
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title>IDR {e.price.toLocaleString("id-ID")}</Card.Title>
                                <Card.Text>{e.name}</Card.Text>
                                <div className="button mt-auto">
                                    <Button variant="dark">Add to Cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    productReducer: state.productReducer
});

export default connect(mapStateToProps)(ProductCard);
