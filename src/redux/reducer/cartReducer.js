const initState = [{
    product_id: 1,
    total_item: 1,
    total_price: 4000000
}, {
    product_id: 2,
    total_item: 3,
    total_price: 5000000
}]

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "DELETE":
            return (state = state.filter((e) => e.product_id !== action.payload));
        default:
            return state;
    }
};
