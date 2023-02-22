import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
	name: "cart",
	initialState: {
		quantity: 0,
		amount: 0,
		products: [],
	},
	reducers: {
		addProduct: (state, action) => {
			const product = state.products.find(
				(p) => p._id === action.payload._id
			);
			if (product) {
				alert("Allready In Cart ");
			} else {
				state.quantity += 1;
				state.amount += action.payload.price * action.payload.quantity;
				state.products.push(action.payload);
			}
		},
		removeProduct: (state, action) => {
			const product = state.products.find(
				(item) => item._id === action.payload.id
			);
			if (product) {
				const newProducts = state.products.filter(
					(item) => item._id !== action.payload.id
				);
				state.products = newProducts;
				state.quantity--;
				state.amount -= product.price * product.quantity;
			}
		},
	},
});
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
