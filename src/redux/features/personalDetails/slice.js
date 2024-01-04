import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profilePhoto: '',
  fullName: '',
  country: '',
  role: '',
  phoneNumber: '',
  address: '',
  submitted: false
};

export const personalDetailsSlice = createSlice({
  name: 'personalDetails',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
      const allFieldsEmpty =
        state.profilePhoto === '' ||
        state.fullName === '' ||
        state.country === '' ||
        state.role === '' ||
        state.phoneNumber === '' ||
        state.address === ''
          ? false
          : true;

      state.submitted = allFieldsEmpty;
    },
    clearFormData: state => ({ ...initialState })
  }
});

export const { updateFormData, clearFormData } = personalDetailsSlice.actions;

export default personalDetailsSlice.reducer;
