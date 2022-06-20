import { React, useState, useEffect } from 'react'
import { Card, Button, Container, Image } from 'react-bootstrap';
import { connect } from "react-redux";
import { deleteCart, amountItem } from '../redux/action/cartAction'

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

    const [newarray, setnewarray] = useState([]);

    const handleMuchItem = (id, type) => {
        let findIndex = props.cartReducer.findIndex((e => e.product_id === id));
        let item = props.cartReducer[findIndex].total_item;
        if (item > 0) {
            if (type === "add") {
                item = item + 1
            }
            else if (type === "subtract") {
                item = item - 1
            }
        }
        props.cartReducer[findIndex].total_item = item
        console.log(props.cartReducer);
        props.dispatch(amountItem(props.cartReducer))
    }

    const deleteItem = (id) => {
        props.dispatch(deleteCart(id))
    }

    return (
        <Container className='mt-5'>
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
                            <Button variant='dark' onClick={() => { handleMuchItem(e.product_id, "subtract") }}>-</Button>
                            <Card.Text className='my-auto mx-3'>{e.total_item}</Card.Text>
                            <Button variant='dark' onClick={() => { handleMuchItem(e.product_id, "add") }}>+</Button>
                            <Card.Text className='my-auto mx-3'>IDR {e.total_price.toLocaleString("id-ID")}</Card.Text>
                        </div>
                        <Button variant='dark' className='ms-auto mb-3' style={{ width: "100px" }} onClick={() => { deleteItem(e.product_id) }}>Hapus</Button>
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
