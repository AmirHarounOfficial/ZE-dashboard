import { AddIpn, CardMarketer, changeEmail, changePhone, deleteWithdrawsMarketer, deletePolicy, getPolicies, getProfile, setNewPassword, updateProfileImage, verifyEmailOtp, verifyPhoneOtp, withdrawsMarketer } from "@/redux/api/Setting/SettingApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const changeEmailThunk = createAsyncThunk('setting/changeEmail' , 
  async(email , {rejectWithValue})=>{
    try{
      const response = await changeEmail(email)
      // console.log('changeEmailThunk' ,response );
      return response 
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to change email");
    }
  }
)

export const verifyEmailOtpThunk = createAsyncThunk('setting/verifyEmailOtp' , 
  async(otp , {rejectWithValue})=>{
    try{
      const response = await verifyEmailOtp(otp)
      // console.log('verifyEmailOtpThunk' ,response );
      return response 
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to verify OTP");
    }
  }
)

export const getProfileThunk = createAsyncThunk('setting/getProfileThunk' , 
  async(_ , {rejectWithValue})=>{
    try{
      const response = await getProfile()
      // console.log('getProfileThunk' , response);
      return response
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to get profile ");
    }
  }
)

export const changePhoneThunk = createAsyncThunk('setting/changePhoneThunk' , 
  async(formData , {rejectWithValue})=>{
    try{
      const response = await changePhone(formData)
      return response
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to change phone");
    }
  }
)

export const verifyPhoneOtpThunk = createAsyncThunk('setting/verifyPhoneOtp' , 
  async(otp , {rejectWithValue})=>{
    try{
      const response = await verifyPhoneOtp(otp)
      // console.log('verifyPhoneOtpThunk' ,response );
      return response 
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to verify OTP");
    }
  }
)

export const CardMarketerThunk = createAsyncThunk('setting/CardMarketerThunk' ,
  async(_ , {rejectWithValue})=>{
    try{
      const response = await CardMarketer()
      console.log('CardMarketerThunk' ,response );
      return response
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to get data of card");
    }
    
  }
)


export const withdrawsMarketerThunk = createAsyncThunk('setting/withdrawsMarketerThunk' ,
  async(params , {rejectWithValue})=>{
    try{
      const response = await withdrawsMarketer(params)
      console.log('withdrawsMarketerThunk' ,response );
      return response
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to get data of withdraws");
    }
    
  }
)

export const deleteWithdrawsMarketerThunk = createAsyncThunk('setting/deleteWithdrawsMarketerThunk',
  async(marketerId , {rejectWithValue})=>{
    try{
      await deleteWithdrawsMarketer(marketerId)
      return marketerId
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to delete withdraws marketer");
    }
  }
)

export const AddIpnThunk = createAsyncThunk('setting/AddIpnThunk',
  async(formData , {rejectWithValue})=>{
    try{
      const response = await AddIpn(formData)
      // console.log('AddIpnThunk' , response);
      return response.data
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to post data of IPN");
    }
  }
)

export const setNewPasswordThunk = createAsyncThunk('setting/setNewPasswordThunk' ,
  async(formData , {rejectWithValue})=>{
    try{
      const response = await setNewPassword(formData)
      // console.log('setNewPasswordThunk', response.data);
      return response.data
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to post new password");
    }
  }
)

export const updateProfileImageThunk = createAsyncThunk('setting/updateProfileImageThunk' ,
  async(formData ,{rejectWithValue})=>{
    try{
      const response = await updateProfileImage(formData)
      return response.data
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to post profile image");
    }
  }
)

/***************************************************** */
//******Activity_Settings
export const getPoliciesThunk = createAsyncThunk('setting/getPoliciesThunk' , 
  async(_ , {rejectWithValue})=>{
    try{
      const response = await getPolicies()
      return response.data
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to get policies  image");
    }
  }
)

export const deletePolicyThunk = createAsyncThunk('setting/deletePolicyThunk',
  async(policyId , {rejectWithValue})=>{
    try{
      await deletePolicy(policyId)
      return policyId
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to delete policy");
    }
  }
)

const initialState ={
  success:false,
  loading: false,
  error: null,

  successEmail:false,
  otpVerified: false,
  otpLoading: false,
  otpError: null,

  profileData:null,

  successPhone:false,
  otpPhoneVerified: false,
  otpPhoneLoading: false,
  otpPhoneError: null,

  cardData:[],
  withdrawsData:[],
  last_page: 1,

  ipnData: null,
  
  policies:[]
}
const settingSlice = createSlice({
  name:'setting' ,
  initialState,
  reducers: {
    resetEmailState: (state) => {
      state.successEmail = false;
      state.loading = false;
      state.error = null;
      state.otpVerified = false;
      state.otpLoading = false;
      state.otpError = null;
    },
    resetPhoneState: (state) => {
      state.successPhone = false;
      state.loading = false;
      state.error = null;
      state.otpPhoneVerified = false;
      state.otpPhoneLoading = false;
      state.otpPhoneError = null;
    },
    resetChangePasswordState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },

  extraReducers:(builder)=>{
    builder
      //changeEmail
      .addCase(changeEmailThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeEmailThunk.fulfilled, (state) => {
        state.loading = false;
        state.successEmail = true;
      })
      .addCase(changeEmailThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //verifyEmailOtp
      .addCase(verifyEmailOtpThunk.pending, (state) => {
        state.otpLoading = true;
        state.otpError = null;
      })
      .addCase(verifyEmailOtpThunk.fulfilled, (state) => {
        state.otpLoading = false;
        state.otpVerified = true;
      })
      .addCase(verifyEmailOtpThunk.rejected, (state, action) => {
        state.otpLoading = false;
        state.otpError = action.payload;
      })
      //getProfile
      .addCase(getProfileThunk.pending , (state)=>{
        state.loading = true ;
        state.error = null;
      })
      .addCase(getProfileThunk.fulfilled , (state , action)=>{
        state.loading = false;
        state.profileData = action.payload;
      })
      .addCase(getProfileThunk.rejected , (state , action)=>{
        state.loading = false;
        state.error = action.payload;
      })
      //changePhone
      .addCase(changePhoneThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePhoneThunk.fulfilled, (state) => {
        state.loading = false;
        state.successPhone = true;
      })
      .addCase(changePhoneThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //verifyPhoneOtp
      .addCase(verifyPhoneOtpThunk.pending, (state) => {
        state.otpPhoneLoading = true;
        state.otpPhoneError = null;
      })
      .addCase(verifyPhoneOtpThunk.fulfilled, (state) => {
        state.otpPhoneLoading = false;
        state.otpPhoneVerified = true;
      })
      .addCase(verifyPhoneOtpThunk.rejected, (state, action) => {
        state.otpPhoneLoading = false;
        state.otpPhoneError = action.payload;
      })
      //CardMarketer
      .addCase(CardMarketerThunk.pending , (state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(CardMarketerThunk.fulfilled,(state , action)=>{
        state.loading = false;
        state.cardData = action.payload;
      })
      .addCase(CardMarketerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //withdrawsMarketer
      .addCase(withdrawsMarketerThunk.pending , (state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(withdrawsMarketerThunk.fulfilled,(state , action)=>{
        state.loading = false;
        state.withdrawsData = action.payload.data;
        state.last_page = action.payload.pagination?.last_page || 1;
      })
      .addCase(withdrawsMarketerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //deleteWithdraws
      .addCase(deleteWithdrawsMarketerThunk.pending , (state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteWithdrawsMarketerThunk.fulfilled , (state,action)=>{
        state.loading = false;
        state.withdrawsData = state.withdrawsData.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteWithdrawsMarketerThunk.rejected , (state , action)=>{
        state.loading = false;
        state.error = action.payload;
      })
      //AddIpn
      .addCase(AddIpnThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddIpnThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.ipnData = action.payload;
      })
      .addCase(AddIpnThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //setNewPasswordThunk
      .addCase(setNewPasswordThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(setNewPasswordThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = false;
      })
      .addCase(setNewPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      //updateProfileImageThunk
      .addCase(updateProfileImageThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateProfileImageThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = false;
      })
      .addCase(updateProfileImageThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
/***************************************************************** */
      //getPoliciesThunk
      .addCase(getPoliciesThunk.pending , (state)=>{
        state.loading = true ;
        state.error = null;
      })
      .addCase(getPoliciesThunk.fulfilled , (state , action)=>{
        state.loading = false;
        state.policies = action.payload;
      })
      .addCase(getPoliciesThunk.rejected , (state , action)=>{
        state.loading = false;
        state.error = action.payload;
      })
      //deletePolicyThunk
      .addCase(deletePolicyThunk.pending , (state)=>{
        state.loading = true ;
        state.error = null;
      })
      .addCase(deletePolicyThunk.fulfilled , (state , action)=>{
        state.loading = false;
        state.policies = state.policies.filter(
          (policy) => policy.id !== action.payload
        );
      })
      .addCase(deletePolicyThunk.rejected , (state , action)=>{
        state.loading = false;
        state.error = action.payload;
      })
}
})

export const { resetEmailState ,resetPhoneState , resetChangePasswordState} = settingSlice.actions;
export default settingSlice.reducer;