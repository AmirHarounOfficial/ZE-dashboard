import React from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

function No_account() {
  const {t} = useTranslation()
  return (
    <>
      <p className="flex justify-center gap-1.5">
        <span className="text-[#697586] text-lg font-normal">
          {t("Dont have an account?")}
        </span>
        <Link href='/Auth/Sign_in' className="text-[#9E7A11] text-lg font-medium">
          {t("Create an account")}
        </Link>
      </p>

    </>
  )
}

export default No_account