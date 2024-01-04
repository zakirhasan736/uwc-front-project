import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  submitted: false
}

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const { name, value } = action.payload
      state[name] = value
      const allFieldsEmpty =
        state.email === '' ||
        state.password === '' ||
        state.confirmPassword === ''
          ? false
          : true

      state.submitted = allFieldsEmpty
    },
    clearFormData: state => ({ ...initialState })
  }
})

export const { updateFormData, clearFormData } = registrationSlice.actions

export default registrationSlice.reducer
