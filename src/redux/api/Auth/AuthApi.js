import API from "../../../../config/api"

/* ========== AUTH APIs ========== */

// login 
export const login = async(FormData)=>{
  const response = await API.post('/provider/login',FormData)
  return response.data
}

// display who is login
export const getCurrentLogin = async(loginToken)=>{
  const response = await API.get('/provider/me',{
    headers:{
      Authorization:`Bearer ${loginToken}`
    },
  })
  return  response.data
}

/* ========== FORGET PASSWORD APIs ========== */


//Enter email to send otp type: forgot
export const forgetPassEnterEmail = async({email})=>{
  const response = await API.post('/provider/send-email-otp',{email,'type':'forgot'});
  return response.data;
};

//Enter phone to send otp type: forgot
export const forgetPassEnterPhone = async({phone})=>{
  const response = await API.post('/provider/forgot-password/send-otp',{phone});
  return response.data;
};

//Verify email otp
export const forgetPassVerifyEmailOtp = async(payload)=>{
  const response = await API.post('/provider/verify-email-otp',payload);
  return response.data;
};

//Verify phone otp
export const forgetPassVerifyPhoneOtp = async(payload)=>{
  const response = await API.post('/provider/forgot-password/verify-otp',payload);
  return response.data;
}

//Reset password
export const resetPassword = async(payload)=>{
  const response = await API.post('/provider/forgot-password/reset',payload);
  return response.data;
} 

// ----------------------------------------------------------------------------------------------------

/* ========== SIGNUP APIs ========== */
// signup
export const signup = async(FormData)=>{
  const response = await API.post('/provider/register',FormData)
  return response.data
}

// check email if exists
export const checkEmail = async(email)=>{
  const response = await  API.post('/provider/check-email',{email})
  return response.data
}

//Enter phone to send otp type: new
export const checkEnterPhone = async({phone})=>{
  const response = await API.post('/provider/forgot-password/send-otp',{phone,'type':'new'});
  return response.data;
};

//Verify phone otp
export const VerifyPhoneOtp = async(payload)=>{
  const response = await API.post('/provider/forgot-password/verify-otp',payload);
  return response.data;
}

//Enter email to send otp type: forgot
export const sendEmail = async({email})=>{
  const response = await API.post('/provider/send-email-otp',{email,'type':'new'});
  return response.data;
};

//Verify email otp
export const VerifyEmailOtp = async(payload)=>{
  const response = await API.post('/provider/verify-email-otp',payload);
  return response.data;
};

// //update in signup data or complete signup
// export const UpdateInSignup = async(FormData)=>{
//   const response = await API.post('/provider/update-profile',FormData)
//   return response.data
// }




