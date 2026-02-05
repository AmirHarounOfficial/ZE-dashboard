"use client"
import SecondSection from '@/app/Components/login/SecondSection'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { useRegistration } from './RegistrationContext'

function Sign_inPage() {
    const {t}= useTranslation()
    const router = useRouter();
    const { updateRegistrationData } = useRegistration();

  const handleRole = (role) => {
    console.log("Selecting role:", role);
    updateRegistrationData({ role });
    router.push('/Auth/Sign_in/Company');
  }

  return (
    <>
      <div className="p-8 lg1:flex justify-between gap-8 ">
        <section className="w-full mt-12.5 lg1:mt-28.5 ">
          <div className='mb-37.5'>
            <div className='flex justify-center gap-1  mb-6'>
              <img src="/images/LogoText.svg" alt="" />
              <img src="/images/Logo.svg" alt="" />
            </div>
            <p className='text-[#364152] text-xl font-normal text-center '>{t('Welcome to our platform, where your journey begins with ease and clarity.')}</p>
          </div>

          <div className='flex flex-col items-center mb-14'>
            <p className='text-[#9E7A11] text-2xl font-medium mb-6'>{t('Choose your account type to get started?')}</p>
            <p className='w-[500px] text-center text-[#656565] text-xl font-normal'>{t('Please select whether you are registering as a company or as an individual to provide you with a personalized experience that suits your needs.')}</p>
          </div>

          <div className='flex justify-center gap-12'>
            <div 
              onClick={()=>handleRole('company')}
              className='flex flex-col justify-center w-62.5 h-62.5 border border-[#C69815] bg-[#F9F5E8] rounded-[3px] cursor-pointer'>
              <span className='flex justify-center mb-5'>
                <img src="/images/Company.svg" alt="" />
              </span>
              <p className='flex justify-center text-[#000] text-2xl font-medium'>{t('Company')} </p>
            </div>

            <div 
              onClick={()=>handleRole('freelance')}
              className='flex flex-col justify-center w-62.5 h-62.5 border border-[#C69815] bg-[#F9F5E8] rounded-[3px] cursor-pointer'>
              <span className='flex justify-center mb-5'>
                <img src="/images/Freelance.svg" alt="" />
              </span>
              <span className='flex justify-center text-[#000] text-2xl font-medium'>{t('Freelance')} </span>
            </div>
          
          </div>
        </section>

        {/* second section */}
        <SecondSection />
      </div>
    </>
  )
}

export default Sign_inPage