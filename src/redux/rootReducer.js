"use client"

import registrationReducer from '@/redux/features/registration/slice';
import signinReducer from '@/redux/features/signin/slice';
import resetPasswordReducer from '@/redux/features/resetPassword/slice';

import personalDetailsReducer from '@/redux/features/personalDetails/slice';


export const reducers = {
  registration: registrationReducer ,
  signin:signinReducer,
  resetPassword:resetPasswordReducer,
  personalDetails:personalDetailsReducer,
}
