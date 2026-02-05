"use client"
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SecondSection from '@/app/Components/login/SecondSection'
import Have_an_account from '@/app/Components/login/Have_an_account'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { FirstRegistrationThunk } from '@/redux/slice/Auth/AuthSlice'
import { useRegistration } from '../../RegistrationContext'

function SetPasswordPage() {
  const {t}=useTranslation()
  const router = useRouter();
  const dispatch = useDispatch();
  const { registrationData, updateRegistrationData } = useRegistration();
  const { loading, error: apiError } = useSelector((state) => state.auth);

  const [password , setPassword] = useState(registrationData.password || '');
  const [password_confirmation , setPassword_confirmation] = useState(registrationData.password_confirmation || '');


  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setPassword(value);
      updateRegistrationData({ password: value });
    } else if (name === "password_confirmation") {
      setPassword_confirmation(value);
      updateRegistrationData({ password_confirmation: value });
    }
  };


  // Validation rules
  const rules = {
    uppercase: /[A-Z]/.test(password),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    number: /[0-9]/.test(password),
    length: password.length >= 8,
  };


  useEffect(() => {
    if (
      password_confirmation &&
      password !== password_confirmation
    ) {
      setError(t("Password does not match"));
    } else {
      setError("");
    }
  }, [password, password_confirmation, t]);

  const handleConfirm = () => {
    if (error || !rules.length || !rules.uppercase || !rules.number || !rules.symbol) {
      return;
    }

    const fullData = {
      ...registrationData,
      password,
      password_confirmation
    };

    dispatch(FirstRegistrationThunk(fullData)).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        router.push('/Auth/Sign_in/Company/Confirmation');
      }
    });
  }


      
        
        
  
  return (
    <>
      <div className="p-8 lg1:flex justify-between gap-8 ">
        {/* first section */}
        <section className="w-full">
          {/* title */}
          <div className=' mt-20 mb-12'>
            <p className='text-[#232323] text-2xl font-medium'>
              {t('Create a password?')}
            </p>
            <p className='text-[#656565] text-xl font-normal'>
              {t('Choose a strong password to protect your account.')}
            </p>
          </div>
          <form>
            <label className="text-[#364152] fontSizeA font-normal">
              {t("password")}
            </label>
            <div className="relative mt-3 mb-3">
              <input
                className="w-full h-15 p-3  border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm outline-none"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder={t("Enter the new password")}
                value={password}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}   
                onBlur={() => setIsFocused(false)}            
              />

              {/* Icon */}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#9A9A9A] text-xl"
              >
                {showPassword ?
                  (
                    <img src="/images/icons/eyeClose.svg" alt="" />
                  )
                  :(
                    <img src="/images/icons/eyeOpen.svg" alt="" />
                  )
                }
              </span>
            </div>
            {isFocused && (
              <ul className={"mb-6 space-y-1 text-sm "}>
                <li className={rules.uppercase ? "text-green-600 list-none flex gap-2" : "text-[#697586] list-disc mx-5"}>
                  <span>{rules.uppercase && <img src='/images/icons/true.svg' />}</span>
                  <span>{t("Use at least one uppercase letter")}</span>
                </li>

                <li className={rules.symbol ? "text-green-600 list-none flex gap-2" : "text-[#697586] list-disc mx-5"}>
                  <span>{rules.symbol && <img src='/images/icons/true.svg' />}</span>
                  <span>{t("Use at least one symbol")}</span>
                </li>

                <li className={rules.number ? "text-green-600 list-none flex gap-2" : "text-[#697586] list-disc mx-5"}>
                  <span>{rules.number && <img src='/images/icons/true.svg' />}</span>
                  <span>{t("Use at least one number")}</span>
                </li>

                <li className={rules.length ? "text-green-600 list-none flex gap-2" : "text-[#697586] list-disc mx-5"}>
                  <span>{rules.length && <img src='/images/icons/true.svg' />}</span>
                  <span>{t("Your password must be at least 8 characters long")}</span>      
                </li>
              </ul>
            )}
            <label className="text-[#364152] fontSizeA font-normal">
              {t("Confirm password")}
            </label>
            <div className="relative mt-3">
              <input
                className={`w-full h-15 p-3  border rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm outline-none ${
                  error ? "border-red-500" : "border-[#C8C8C8]"
                }`}
                type={showNewPassword ? "text" : "password"}
                name="password_confirmation"
                id="password_confirmation"
                placeholder={t("Re-enter the new password")}
                value={password_confirmation}
                onChange={handleChange}
              />

              {/* Icon */}
              <span
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#9A9A9A] text-xl"
              >
                {showNewPassword ?
                  (
                    <img src="/images/icons/eyeClose.svg" alt="" />
                  )
                  :(
                    <img src="/images/icons/eyeOpen.svg" alt="" />
                  )
                }
              </span>
            </div>
            
          </form>

          {apiError && (
            <p className="text-red-500 mt-4 text-sm">
              {typeof apiError === 'string' ? apiError : (apiError.message || t("An error occurred"))}
            </p>
          )}

          <div className='flex gap-6 justify-center mb-12 mt-10'>
            <Link 
              href='/Auth/Sign_in/Company'
              className="px-4 py-2 w-64 flex justify-center items-center border border-[var(--color-primary)] text-[var(--color-primary)] rounded-[3px]"
            >
              {t('the previous')}
            </Link>
            <button
              onClick={handleConfirm}
              disabled={loading || error}
              className={`px-4 py-2 w-64 h-15 bg-[var(--color-primary)] text-white rounded-[3px] cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? t('Loading...') : t('confirmation')}
            </button>
          </div>
          
          <Have_an_account/>
        </section>

        {/* second section */}
        <SecondSection />
      </div>

    </>
  )
}

export default SetPasswordPage