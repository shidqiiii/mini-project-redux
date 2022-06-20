import { React, useState, useEffect } from 'react'
import { Card, Button, Container, Image } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteCart, amountItem } from '../redux/action/cartAction'
import { toast, ToastContainer } from 'react-toastify';

function ShoppingCartPage(props) {
    const [listCart, setlistCart] = useState([]);

    const dataJoin = () => {
        let newData = [];
        props.cartReducer.map(item => (
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
        ))
        setlistCart(newData);
        console.log(newData);
    }

    useEffect(() => {
        dataJoin();
    }, [props.cartReducer]);

    const AmountItem = (id, type) => {
        props.dispatch(amountItem([id, type]))
    }

    const deleteItem = (id) => {
        props.dispatch(deleteCart(id))
    }

    const totalPriceCheckout = listCart.map(item => item.total_price).reduce((prev, curr) => prev + curr, 0);


    return (
        <Container className='mt-5'>
            {listCart.length === 0 ? (
                <Card>
                    <Card.Body className='mx-auto text-center'>
                        <Card.Title>You haven't selected an item</Card.Title>
                        <Card.Text>Please add items first</Card.Text>
                        <Button variant='dark' as={Link} to="/product">Product Page</Button>
                    </Card.Body>
                </Card>) : (
                <div>
                    {listCart.map((e) => (
                        <Card className="mt-3 px-4" key={e.product_id}>
                            <div className="row g-0">
                                <div className="col-md-2">
                                    <Image src={e.image} className="img-fluid rounded-start" alt="image content" />
                                </div>
                                <div className="col-md-7 d-flex align-items-center">
                                    <Card.Body>
                                        <Card.Title>{e.product_name}</Card.Title>
                                        <Card.Text>IDR {e.price.toLocaleString("id-ID")}</Card.Text>
                                    </Card.Body>
                                </div>
                                <div className="col-md-3 d-flex align-items-center justify-content-center">
                                    <Button variant='dark' onClick={() => { AmountItem(e.product_id, "subs") }}>-</Button>
                                    <Card.Text className='my-auto mx-3'>{e.total_item}</Card.Text>
                                    <Button variant='dark' onClick={() => { AmountItem(e.product_id, "add") }}>+</Button>
                                    <Card.Text className='my-auto mx-3'>IDR {e.total_price.toLocaleString("id-ID")}</Card.Text>
                                </div>
                                <Button variant='dark' className='ms-auto mb-3' style={{ width: "50px" }} onClick={() => { deleteItem(e.product_id) }}><BsTrash /></Button>
                            </div>
                        </Card>
                    ))}
                    <Card Card className='my-3'>
                        <Card.Body className='ms-auto'>
                            <Card.Title>Total : IDR {totalPriceCheckout.toLocaleString("id-ID")}</Card.Title>
                            <div className='d-flex justify-content-end'>
                                <Button variant='dark'>Checkout</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            )}
        </Container >
    )
}

const mapStateToProps = state => ({
    cartReducer: state.cartReducer,
    productReducer: state.productReducer
});


export default connect(mapStateToProps)(ShoppingCartPage);
