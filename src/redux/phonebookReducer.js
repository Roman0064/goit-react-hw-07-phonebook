import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchAllContacts } from './operations'

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};
export const contactsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // addContact: (state, action) => {
    //   state.contacts.items.push(action.payload);
    // },
    // deleteContact: (state, action) => {
    //   state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
    // },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
  extraReducers: bulider => 
  bulider.addCase(fetchAllContacts.pending, (state, action) => {
    state.contacts.isLoading = true;
    state.contacts.error = null;
  }).addCase(fetchAllContacts.fulfilled, (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = null;
    state.contacts.items = action.payload;
  }).addCase(fetchAllContacts.rejected, (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
  }).addCase(addContact.pending, (state, action) => {
    state.contacts.isLoading = true;
  }).addCase(addContact.fulfilled, (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = null;
    state.contacts.items.push(action.payload);
  }).addCase(addContact.rejected, (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
  }).addCase(deleteContact.pending, (state, action) => {
    state.contacts.isLoading = true;
    state.contacts.error = null;
  }).addCase(deleteContact.fulfilled, (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = null;
    const index = state.contacts.items.findIndex(
      contact => contact.id === action.payload
    );
    if (index !== -1) {
      state.contacts.items.splice(index, 1);
    }
  }).addCase(deleteContact.rejected, (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
  }),
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
