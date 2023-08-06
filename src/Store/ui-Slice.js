import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name:'ui',
  initialState:{showCart:false,notifications:null},
  reducers:{
    toggle(state){
      state.showCart = !state.showCart;
    },
    onlyShow(state){
      state.showCart = true;
    },
    setNotification(state,action)
      {
      state.notifications = 
        {
        status:action.payload.status,
        title:action.payload.title,
        message:action.payload.message,
        };
      },
      hideNotofications(state){
        state.notifications = null;
      },
  }
})

export default uiSlice;

export const uiActions = uiSlice.actions;