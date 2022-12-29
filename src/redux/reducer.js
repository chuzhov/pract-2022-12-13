import { createAction, createReducer } from '@reduxjs/toolkit'

export const authByGoogle = createAction('auth/Google')

const initialState = { user: null }

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(authByGoogle, (state, action) => {
      console.log(action);
      state.user = action.payload
    })
})