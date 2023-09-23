import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

const store = configureStore({
    todoReducer:todoReducer
})