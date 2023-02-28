import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://63fa0873beec322c57ec3927.mockapi.io/api-n-1';

export const fatchContacts = createAsyncThunk('contacts/fatchAll', 
  async (_, thunkAPI) =>{
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const addContact = createAsyncThunk('contacts/addContact', 
  async (newContact, thunkAPI) =>{
    console.log(newContact)
    try {
      const response = await axios.post('/contacts',{name: newContact.name, number: newContact.number});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const deleteContact = createAsyncThunk('contacts/deleteContact', 
  async (idContact, thunkAPI) =>{
    try {
      const response = await axios.delete(`/contacts/${idContact}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)