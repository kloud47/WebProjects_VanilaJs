console.log('Exporting module.');

const shippingCost = 10;
export const cart = [];

// export const addTOCart = function (product, quantity) {
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart.`);
// };

// const totalPrice = 237;
// const totalQty = 10;

// export { totalPrice, totalQty as qty };

export default function (product, quantity) {// no need of naming:
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart.`);
};