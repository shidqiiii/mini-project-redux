export const AddCart = value => ({
    type: "ADD",
    payload: value
});

export const deleteCart = value => ({
    type: "DELETE",
    payload: value
});

export const amountItem = value => ({
    type: "AMOUNT",
    payload: value
});