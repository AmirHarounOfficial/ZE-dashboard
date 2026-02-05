'use client'
import React from 'react'
import { useTranslation } from 'react-i18next'

function Header() {
  const {t} = useTranslation()
  return (
    <>

      <p className='text-[#364152] text-2xl font-medium mb-3'>{t('Road services')}</p>
      <p className='text-[#697586] text-base font-normal '>{t('Lets check your updates today')}</p>
    </>
  )
}

export default Header