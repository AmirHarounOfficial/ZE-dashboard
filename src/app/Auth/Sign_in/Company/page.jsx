"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
import SecondSection from '@/app/Components/login/SecondSection'
import CompanyInformationPage from './CompanyInformation/page'

function CompanyPage() {
  const {t}=useTranslation()
  return (
    <>
      <div className="p-8 lg1:flex justify-between gap-8 ">
        {/* first section */}
        <section className="w-full">
          <CompanyInformationPage/>
          
        </section>

        {/* second section */}
        <SecondSection />
      </div>

    </>
  )
}

export default CompanyPage