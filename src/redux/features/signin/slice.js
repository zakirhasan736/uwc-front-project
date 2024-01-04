import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  password: '',
  submitted: false,
}

export const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const { name, value } = action.payload
      state[name] = value
      const allFieldsEmpty =
        state.email === '' || state.password === '' ? false : true

      state.submitted = allFieldsEmpty
    },
    clearFormData: (state) => ({ ...initialState }),
  },
})

export const { updateFormData, clearFormData } = signinSlice.actions

export default signinSlice.reducer
