"use client"
import Have_an_account from '@/app/Components/login/Have_an_account'
import SecondSection from '@/app/Components/login/SecondSection'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { VerifyPhoneOtpThunk } from '@/redux/slice/Auth/AuthSlice'
import { useRegistration } from '../../RegistrationContext'

function PhoneOtpPage() {
      const {t}=useTranslation()
      const router = useRouter();
      const dispatch = useDispatch();
      const { registrationData } = useRegistration();
      const { loading, error } = useSelector((state) => state.auth);
      
      const [otpValues, setOtpValues] = useState(["", "", "", ""]);
      const [showError, setShowError] = useState(false);

      const handleChangeOtp = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]?$/.test(value)) {
          const newOtp = [...otpValues];
          newOtp[index] = value;
          setOtpValues(newOtp);
        }

        if (value.length === 1) {
          const nextInput = document.getElementById(`otp-${index + 1}`);
          nextInput?.focus();
        }
      };

      const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value) {
          const prevInput = document.getElementById(`otp-${index - 1}`);
          prevInput?.focus();
        }
      };

      // timer
      const [timeLeft, setTimeLeft] = useState(30);
      const [canResend, setCanResend] = useState(false);

      useEffect(() => {
        if (!canResend && timeLeft > 0) {
          const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
          }, 1000);
          return () => clearInterval(timer);
        }
        if (timeLeft === 0) {
          setCanResend(true);
        }
      }, [timeLeft, canResend]);

      const handleResend = async () => {
        try {
          await dispatch(checkEnterPhoneThunk({ 
            phone: `${registrationData.country_code}${registrationData.phone}` 
          })).unwrap();
          
          console.log("📩 OTP Resent successfully");
          setTimeLeft(30);
          setCanResend(false);
          setOtpValues(["", "", "", ""]);
          setShowError(false);
        } catch (error) {
          console.error("Failed to resend OTP:", error);
        }
      };
  
  return (
    <>
    <div className="p-8 lg1:flex justify-between gap-8 ">
        {/* first section */}
        <section className="w-full mt-20">
          {/* logo */}
          <div className="WHLogA bg-[#EEF2F6] rounded-[100px] flex justify-center items-center mx-auto mb-5">
            <p className="WHLogB bg-[#CDD5DF] rounded-[100px] flex justify-center items-center">
              <img src="/images/icons/call-received.svg" className="WHLogC" alt="" />
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[var(--color-primary)] text-xl font-bold">
              {t("Verify number")}
            </p>
            <p className="text-center text-lg text-[#656565] mt-4 w-[400px]">
                {t('Please enter the code we sent you')}
                <span className="font-semibold text-[var(--color-primary)]">
                  {registrationData?.country_code}{registrationData?.phone || '***'}
                </span>
                {' '}{t('To check the code')}
            </p>
          </div>

          <div className="my-10">
            <p className="text-[#4D4D4D] text-base font-medium mb-3 text-center">
              {t("verification code")}
            </p>

            <form
              className="flex gap-4 justify-center"
              dir="ltr"
              onSubmit={(e) => e.preventDefault()}
            >
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  maxLength="1"
                  value={otpValues[i]}
                  onChange={(e) => handleChangeOtp(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="border border-[#C7C7C7] bg-white w-25 h-20 rounded-[3px] text-center text-lg"
                />
              ))}
            </form>

            {(showError || error) && (
              <p className="text-red-500 mt-3 text-sm text-center">
                {error || t("Invalid OTP code. Please try again.")}
              </p>
            )}
          </div>

          <div className="mt-6">
          {!canResend ? (
            <div className="flex justify-center items-center gap-2">
              <span className="text-[#4D4D4D] text-base">
                {t("Resend after")}
              </span>
              <span className="text-[var(--color-primary)] text-base font-bold">
                00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
              </span>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={handleResend}
                className="text-[var(--color-primary)] text-base font-bold"
              >
                {t("Resend")}
              </button>
            </div>
          )}
          </div>

          {/* btn */}
          <div className="flex gap-6 justify-center mb-12 mt-4">
            <Link
              href='/Auth/Sign_in/Company'
              className="px-4 py-2 w-64 flex justify-center items-center border border-[var(--color-primary)] text-[var(--color-primary)] rounded"
            >
              {t("the previous")}
            </Link>

            <button
              onClick={async () => {
                const otpCode = otpValues.join('');
                
                if (otpCode.length !== 4) {
                  setShowError(true);
                  return;
                }

                try {
                  await dispatch(VerifyPhoneOtpThunk({ 
                    phone: `${registrationData.country_code}${registrationData.phone}`,
                    otp: otpCode 
                  })).unwrap();
                  
                  // If verification successful, navigate to SetPassword
                  router.push('/Auth/Sign_in/Company/SetPassword');
                } catch (error) {
                  console.error("OTP verification failed:", error);
                  setShowError(true);
                }
              }}
              disabled={loading}
              className={`px-4 py-2 w-64 h-15 bg-[var(--color-primary)] text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {loading ? t("Loading...") : t("the next")}
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

export default PhoneOtpPage