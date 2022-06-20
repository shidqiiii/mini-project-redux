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
            const existingIndex = state.findIndex((item) => item.product_id === action.payload.product_id);
            if (existingIndex >= 0) {
                state[existingIndex].total_item += 1;
                return [...state]
            }
            else {
                return [...state, action.payload];
            }
        case "DELETE":
            return (state = state.filter((e) => e.product_id !== action.payload));
        case "AMOUNT":
            const checkIndex = state.findIndex((item) => item.product_id === action.payload[0]);

            if (action.payload[1] === "add") {
                state[checkIndex].total_item += 1;
            }
            else if (action.payload[1] === "subs") {
                if (state[checkIndex].total_item > 1) {
                    state[checkIndex].total_item -= 1;
                }
                else if (state[checkIndex].total_item === 1) {
                    const nextCartItems = state.filter(
                        (item) => item.product_id !== action.payload[0]
                    );
                    console.log(nextCartItems);
                    state = nextCartItems;
                }
            }
            return [...state]
        default:
            return state;
    }
};
