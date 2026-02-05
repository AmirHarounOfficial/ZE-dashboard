"use client"
import SecondSection from '@/app/Components/login/SecondSection';
import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next';

function ConfirmationPage() {
      const { t } = useTranslation();
  
  return (
    <>
      <div className="p-8 lg1:flex justify-between gap-8 ">
        {/* first section */}
        <section className="w-full">
          <div className='flex flex-col items-center gap-4 mt-25'>
            <p className='text-[#0F022E] text-2xl font-bold'>{t('Your account has been created successfully.')}</p>
            <p className='text-[#656565] text-lg font-medium'>{t('You have successfully created your account, log in now and enjoy our services.')}</p>
            <img src="/images/ConfirmationDone.svg" alt="" className='mt-10 mb-12 lg1:(mb-20 ,mt-14)' />
          </div>
          <div className=''>
            <Link href='/Auth/Login' className='w-full flex justify-center'>
              <button  
                className='w-[30%] h-15 bg-[var(--color-primary)] text-white text-base font-medium rounded-[3px] cursor-pointer '>
                  {t('Log in')}
              </button>
            </Link>
          </div>          
        </section>

        {/* second section */}
        <SecondSection />
      </div>


    </>
  )
}

export default ConfirmationPage