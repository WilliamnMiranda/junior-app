import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  _id: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login(state, { payload }) {
      localStorage.setItem('team-token', payload.token)
      return {
        ...state,
        name: payload.name,
        registry: payload.registry,
        token: payload.token,
        authenticate: true,
      }
    },
    authenticate(state, { payload }) {
      return {
        ...state,
        name: payload.name,
        email: payload.email,
        cpf: payload.cpf,
        _id: payload._id,
        authenticate: true,
      }
    },
    logout(state) {
      localStorage.removeItem('token')
      return {
        ...state,
        name: '',
        registry: '',
        token: '',
        authenticate: false,
      }
    },
  },
})

export const { login, authenticate, logout } = userSlice.actions

export default userSlice.reducer
