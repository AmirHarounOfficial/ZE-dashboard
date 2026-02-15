import API from "../../../../config/api"

export const changeEmail = async({email})=>{
  const response = await API.post('/provider/changeEmailRequest' , {email})
  // console.log('API response:', response.data);
  return response.data
}

export const verifyEmailOtp = async({otp})=>{
  const response = await API.post('/provider/changeEmailOtp' , {otp})
  // console.log('Verify OTP response:', response.data);
  return response.data
}


// profile endpoint to update localstorage data of user******/////
export const getProfile = async()=>{
  const response = await API.get('/provider/me')
  return response.data
}

export const changePhone = async({phone , country_code})=>{
  const response = await API.post('/provider/changePhoneRequest' , {phone , country_code})
  return response.data
}

export const verifyPhoneOtp = async({otp})=>{
  const response = await API.post('/provider/changePhoneOtp' , {otp})
  // console.log('Verify OTP response:', response.data);
  return response.data
}

export const CardMarketer = async()=>{
  const response =  await API.get('/marketer/analysis')
  return response.data
}

export const withdrawsMarketer = async (params) => {
  const response = await API.get("/marketer/withdraws", { params });
  return response.data;
};


export const deleteWithdrawsMarketer = async(marketerId)=>{
  const response = await API.post('/marketer/cancel/Withdraw' , {id:marketerId})
  return response.data
}

export const AddIpn = async(formData)=>{
  const response = await API.post('/marketer/add-ipn' , formData , {
    headers: {
      'Content-Type': 'multipart/form-data',
    }})
    return response
}

export const setNewPassword = async(formData)=>{
  const response = await API.post('/provider/change-password',{ ...formData}, {
    headers: {
      'Content-Type': 'application/json',
    }})
  return response 
}

export const updateProfileImage = async (formData) => {
  const response = await API.post("/provider/update-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

/***************************************************** */
//******Activity_Settings
export const getPolicies = async()=>{
  const response = await API.get('/provider/policies')
  return response.data
}

export const deletePolicy = async(policyId)=>{
  const response = await API.delete(`/provider/policies/${policyId}`)
  return response.data
}
