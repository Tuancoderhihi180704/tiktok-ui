import {SET_TODO_INPUT ,ADD_TODO_INPUT,DELETE_TODO_INPUT,UP_DATE_TODO_INPUT} from './constants';
export const setToDoInput = payLoad => ({
    type : SET_TODO_INPUT,
    payLoad
})
export const addToDoInput = payLoad => ({
    type : ADD_TODO_INPUT,
    payLoad
})
export const deleteToDoInput = payLoad => ({
    type : DELETE_TODO_INPUT,
    payLoad
})
export const upDateToDoInput = (index, newValue) => ({
    type : UP_DATE_TODO_INPUT,
    payload: { index, newValue }
})