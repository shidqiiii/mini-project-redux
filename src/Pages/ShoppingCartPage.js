import { React, useState, useEffect } from 'react'
import { Card, Button, Container, Image } from 'react-bootstrap';
import { connect } from "react-redux";
import { deleteCart } from '../redux/action/cartAction'

function ShoppingCartPage(props) {
    const [listCart, setlistCart] = useState([]);
    const dataJoin = () => {
        let newData = [];
        props.cartReducer.map(item => {
            props.productReducer.map((e) => {
                if (item.product_id === e.id) {
                    let data = {
                        product_id: item.product_id,
                        total_item: item.total_item,
                        product_name: e.name,
                        price: e.price,
                        image: e.image,
                        total_price: e.price * item.total_item,
                    }
                    newData.push(data);
                    // console.log(data);
                }
            })
        })
        setlistCart(newData);
        console.log(newData);
    }

    useEffect(() => {
        dataJoin();
    }, [props.cartReducer]);

    return (
        <Container>
            {listCart.map((e) => (
                <Card className="mt-5 px-4" key={e.product_id}>
                    <div className="row g-0">
                        <div className="col-md-2">
                            <Image src={e.image} className="img-fluid rounded-start" alt="image content" />
                        </div>
                        <div className="col-md d-flex align-items-center">
                            <Card.Body>
                                <Card.Title>{e.product_name}</Card.Title>
                                <Card.Text>{e.total_price}</Card.Text>
                            </Card.Body>
                        </div>
                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                            <Button variant='dark'>-</Button>
                            <Card.Text className='my-auto mx-3'>{e.total_item}</Card.Text>
                            <Button variant='dark'>+</Button>
                        </div>
                        <div className="col-md-1 d-flex align-items-center justify-content-center mx-3">
                            <Button variant='dark' className='my-auto' onClick={() => { props.dispatch(deleteCart(e.product_id)) }}>Hapus</Button>
                        </div>
                    </div>
                </Card>
            ))}
        </Container >
    )
}

const mapStateToProps = state => ({
    cartReducer: state.cartReducer,
    productReducer: state.productReducer
});

export default connect(mapStateToProps)(ShoppingCartPage);
