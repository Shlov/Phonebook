import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createStandaloneToast } from '@chakra-ui/toast'

const { toast } = createStandaloneToast()

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

axios.defaults.baseURL = 'http://localhost:8000';

export const register = createAsyncThunk('auth/register',
  async (credentials, thunkAPI) => {
    try {
      // console.log(credentials);
      const response = await axios.post('/users/signup', credentials);
      // console.log(response);
      setAuthHeader(response.data.token);
      // console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', 
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      toast({
        title: `Hello ${response.data.user.name}   👋 (●◡●) 🔓 `,
        description: '',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      })
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', 
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
      toast({
        title: 'Goodbye  (●__●💧)  🔒',
        description: '',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      })
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk('auth/refreshUser',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
