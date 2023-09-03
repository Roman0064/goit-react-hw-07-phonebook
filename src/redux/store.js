import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './phonebookReducer';


const store = configureStore({
  reducer: contactsReducer,
});

export default store;