import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts',{name: newContact.name, number: newContact.number});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  );
  
  export const replaceContact = createAsyncThunk('contact/replaceContact', 
  async (replaceContact, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${replaceContact.id}`, {name: replaceContact.name, number: replaceContact.number});
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