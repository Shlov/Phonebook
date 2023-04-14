import { createSlice } from "@reduxjs/toolkit";
import { fatchContacts, addContact, deleteContact, replaceContact } from "./operations";

const contactsInitialState = { 
  items: [],
  isLoading: false,
  // isEdited: null,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  // reducers:{
  //   editContact(state, action) {
  //     state.isEdited = action.payload;
  //   },
  // },

  extraReducers:{
    [fatchContacts.pending]: handlePending,
    [fatchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fatchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [replaceContact.pending] (state) {
      state.isLoading = true;
      state.isEdited = true;
    },
    [replaceContact.fulfilled] (state, action) {
      state.isLoading = false;
      state.isEdited = false;
      state.error = null;

      // var 1

      // state.items = state.items.filter((item) => item.id !== action.meta.arg.id);
      // state.items = [...state.items, action.meta.arg].push(action.payload);

      // var 2

      // state.items.map(item => item.id !== action.meta.arg.id ? action.meta.arg : item);

      // var 3

      state.items = state.items.reduce((acc, item) => {
        if (item.id === action.meta.arg.id) {
          // return acc.push(action.meta.arg);
          return [...acc, action.meta.arg];
        };
        // return acc.push({name: item.name, number: item.number});
        return [...acc, {id: item.id, name: item.name, number: item.number}];
      }, []);
    },
    [replaceContact.rejected] (state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.isEdited = false;
    },

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action)
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    [deleteContact.rejected]: handleRejected,
  },
});


export const {editContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
