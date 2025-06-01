import {configureStore} from '@reduxjs/toolkit';
 
import apiCall from './components/ApiCall';

export const store = configureStore({
  reducer: {
    [apiCall.reducerPath]: apiCall.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCall.middleware),
});