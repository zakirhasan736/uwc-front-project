import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  newPassword: '',
  confirmPassword: '',
  submitted: false
}

export const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const { name, value } = action.payload
      state[name] = value
      const allFieldsEmpty =
        state.email === '' || state.newPassword === '' || state.confirmPassword === '' ? false : true

      state.submitted = allFieldsEmpty
    },
    clearFormData: state => ({ ...initialState })
  }
})

export const { updateFormData, clearFormData } = resetPasswordSlice.actions

export default resetPasswordSlice.reducer
