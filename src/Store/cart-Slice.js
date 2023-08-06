import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalCartPrice: 0,
    change: false,
  },
  reducers: {
    replaceCart(state, action) {
      // console.log("In replace cart", state.items);
      // console.log("In replace cart", state.totalQuantity);
      // console.log("In replace cart", state.totalCartPrice);
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.totalCartPrice = action.payload.totalCartPrice;
    },
    restoreChange(state){
      state.change = false;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      // console.log("In addItem payload", action.payload);
      // console.log("In addItem items", state.items);
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.change = true;
      if (!existingItem) {
        state.totalCartPrice = state.totalCartPrice + newItem.price;
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        state.totalCartPrice = state.totalCartPrice    + newItem.price
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;

      }
      // state.items = state.items.push(action.item);
    },
    removeItemFromCart(state, action) {
      const newId = action.payload;
      const existingItem = state.items.find(item => item.id === newId);
      state.totalQuantity--;
      state.change = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== newId);
        state.totalCartPrice = state.totalCartPrice - existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalCartPrice = state.totalCartPrice - existingItem.price
      }
    },
  }
})



export default cartSlice;
export const cartActions = cartSlice.actions;