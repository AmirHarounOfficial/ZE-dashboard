import React from 'react'
import { useTranslation } from 'react-i18next'
import TextEditor from './TextEditor'

function Addpage() {
  const {t} = useTranslation()
  return (
    <>
      <div className='p-6'>
        {/*  */}
        <div>
          <p className='text-[#4B5565] text-sm font-normal'>{t('the address')}</p>
          <input type="text"
            className='w-full h-14 border border-[#E3E8EF] mt-1.5 rounded-[3px] outline-none px-4'  />
        </div>
        {/*  */}
        <div className='mt-4'>
          <p className='text-[#4B5565] text-sm font-normal'>{t('Proposed text')}</p>
          <TextEditor  disabled/>
        </div>

      </div>


    </>
  )
}

export default Addpage