"use client"
import Have_an_account from '@/app/Components/login/Have_an_account'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useRouter } from "next/navigation";
import { useRegistration } from '../../RegistrationContext'
import { useDispatch, useSelector } from 'react-redux'
import { checkEnterPhoneThunk } from '@/redux/slice/Auth/AuthSlice'


function CompanyInformationPage() {
    const {t}=useTranslation()
    const router = useRouter();
    const { registrationData, updateRegistrationData } = useRegistration();
    const { loading, error } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
      firstname: registrationData?.firstname || '',
      lastname: registrationData?.lastname || '',
      phone: registrationData?.phone || '',
      country_code: registrationData?.country_code || '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      const updated = { ...formData, [name]: value };
      setFormData(updated);
      updateRegistrationData(updated);
    };

    // const handlePhoneChange = (value) => {
    //   const updated = { 
    //     ...formData, 
    //     phone: value, 
    //   };
    //   setFormData(updated);
    //   updateRegistrationData(updated);
    // };
  const handlePhoneChange = (value, country) => {
    const dialCode = `+${country.dialCode}`;
    const phoneNumber = value.replace(country.dialCode, '');

    const updated = {
      ...formData,
      country_code: dialCode,
      phone: phoneNumber,
    };

    setFormData(updated);
    updateRegistrationData(updated);
  };



    const dispatch = useDispatch();

    const handleNext = async () => {
      updateRegistrationData(formData);
      
      // Send OTP to the phone number
      try {
        const result = await dispatch(checkEnterPhoneThunk({ 
          phone: `${formData.country_code}${formData.phone}` 
        })).unwrap();
        
        // If OTP sent successfully, navigate to OTP page
        router.push("/Auth/Sign_in/Company/PhoneOtp");
      } catch (error) {
        console.error("Failed to send OTP:", error);
        // Error will be displayed from Redux state
      }
    };

  return (
    <>
      {/* logo */}
          <div className="flex justify-center gap-1 mt-20">
            <img src="/images/LogoText.svg" alt="" />
            <img src="/images/Logo.svg" alt="" />
          </div>

          {/* title */}
          <div className='px-4 mt-20'>
            <p className='text-[#232323] text-2xl font-medium'>
              {t('Create a new account!')}
            </p>
            <p className='text-[#656565] text-xl font-normal'>
              {t('Complete simple steps to start your journey with us.')}
            </p>
          </div>


          {/* content */}
          <div className='mt-10'>

            {/* First name */}
            <div className="flex flex-col">
              <label className="text-[#364152] text-base font-normal mb-3">{t("First Name")}</label>
              <input
                type="text"
                name="firstname"
                value={formData?.firstname}
                onChange={handleChange}
                className=" h-15 p-3 w-full border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm outline-none"
                placeholder={t("Enter first name")}
              />
            </div>

            {/* Last name */}
            <div className="flex flex-col mt-4">
              <label className="text-[#364152] text-base font-normal mb-3">{t("Last Name")}</label>
              <input
                type="text"
                name="lastname"
                value={formData?.lastname}
                onChange={handleChange}
                className=" h-15 p-3 w-full border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm outline-none"
                placeholder={t("Enter last name/family name")}
              />
            </div>

            {/* phone number */}
            <div className="mt-4">
              <label className="text-[#364152] text-base font-normal">{t("Mobile number")}</label>
              <div className='mt-3'>
                <PhoneInput
                  country={'sa'}
                  value={`${formData.country_code}${formData.phone}`}
                  onChange={handlePhoneChange}
                  placeholder="000000000"
                  containerClass="!w-full"
                  inputClass="!w-full !h-[60px] !border !border-[#C8C8C8] !rounded-[3px] !pl-24 !text-left !text-[#364152] placeholder-[#9A9A9A] focus:border-[#C69815] outline-none"
                  buttonClass="!absolute !left-0 !top-0 !h-full !px-3 !flex !items-center !gap-2 !bg-transparent !border-r-0"
                  dropdownClass="!absolute !left-0 !top-full !mt-1 !z-50 !bg-white !border !border-[#C8C8C8] !rounded-md !shadow-lg"
                />
              </div>
            
            
            </div>

            {error && (
              <p className="text-red-500 mt-2 text-sm">
                {typeof error === 'string' ? error : (error.message || t("An error occurred"))}
              </p>
            )}

            {/* btn */}
            <button
              onClick={handleNext}
              disabled={loading}
              className={`px-4 py-2.5 cursor-pointer bg-[#C69815] text-white text-base font-medium  w-full mt-8 mb-10 h-15 rounded-[3px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? t('Loading...') : t('the next')}
            </button>
        
            <Have_an_account/>
          </div>

    </>
  )
}

export default CompanyInformationPage