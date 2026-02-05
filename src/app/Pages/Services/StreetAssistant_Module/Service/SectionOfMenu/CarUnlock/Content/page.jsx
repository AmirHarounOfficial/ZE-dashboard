'use client'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'

function ContentPage() {
  const {t} = useTranslation()

  const GreenSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
      width: 53,
      height: 24,
      padding: 0,
      '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 3,
        transitionDuration: '500ms',
        '&.Mui-checked': {
          transform: 'translateX(31px)', 
          color: '#fff',
          '& + .MuiSwitch-track': {
            backgroundColor: '#10B981',
            opacity: 1,
            border: 0,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: '#33cf4d',
          border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color: theme.palette.grey[100],
        },
      },
      '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 18,
        height: 18,
      },
      '& .MuiSwitch-track': {
        borderRadius: 24 / 2,
        backgroundColor: '#E9E9EA',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
          duration: 500,
        }),
      },
  }));
  


  return (
    <>
      <div className=' p-6'>
        <div className='border border-[#CDD5DF] p-6'>

          <div className='flex justify-between items-center px-6 py-4 mb-8 border border-[#CDD5DF] rounded-[3px]'>
            <p className='text-[#4B5565] text-base font-normal '>{t('Activation of all services')}</p>
            <GreenSwitch   />
          </div>

          <div className='flex gap-3 w-full mb-6'>
            {/* Total profits */}
            <section className='border border-[#CDD5DF] rounded-[3px] p-4 w-full'>
              {/* title */}
              <div className='flex items-center gap-3 '>
                <p className='w-10 h-10 bg-[#EDE7FD] flex items-center justify-center rounded-[3px]'>
                  <img src="/images/icons/cash.svg" alt="" />
                </p>
                <p className='text-[#4B5565] text-base font-normal'>{t('Total profits')}</p>
              </div>

              <div className='py-2.5'>
                <p className='text-[#202939] text-lg font-medium'>22</p>
              </div>

            </section>

            {/* Number of requests */}
            <section className='border border-[#CDD5DF] rounded-[3px] p-4 w-full'>
              {/* title */}
              <div className='flex items-center gap-3 '>
                <p className='w-10 h-10 bg-[#FEF0C7] flex items-center justify-center rounded-[3px]'>
                  <img src="/images/icons/Invoice_Orange.svg" alt="" />
                </p>
                <p className='text-[#4B5565] text-base font-normal'>{t('Number of requests')}</p>
              </div>

              <div className='py-2.5'>
                <p className='text-[#202939] text-lg font-medium'>
                  <span>11</span>
                  <span>{t('Requests')}</span>
                
                </p>
              </div>

            </section>

          </div>

          <div className='border border-[#CDD5DF] p-6'>

            <div className='flex gap-4 mb-6'>
              <p className='text-[#4B5565] text-base font-normal '>{t('Activate the service')}</p>
              <GreenSwitch   />
            </div>
            
            <div className='flex flex-col gap-1.5 mb-4'>
              <label className="text-[#364152] text-sm font-normal">{t('Car unlocking price')}</label>
              <input 
                type="text"
                placeholder={t('Enter the price')}
                className='border border-[#C8C8C8] w-full h-14 px-3 outline-none'
                />
            </div>

            {/* note */}
            <ul className='bg-[#EEF2F6] p-3 mb-4'>
              <li className='text-[#775B0D] text-sm font-normal'>{t('You must verify that the customer owns the car before performing the service and upload proof of ownership after completion.')}</li>
            </ul>

            <div>
              <p className='text-[#4B5565] text-sm font-normal mb-3'>{t('Is the service available only during daytime hours?')}</p>
              {["نعم", "لا"].map((item, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="day_service"
                    className="peer hidden"
                    defaultChecked={item === "نعم"}
                  />

                  <span className="w-5 h-5 mb-2 rounded-full border border-gray-400 flex items-center justify-center peer-checked:bg-[var(--color-primary)] peer-checked:border-0">
                    <img src="/images/icons/checkWhite.svg" alt="" />
                  </span>

                  <span className='mb-2 text-[#697586] text-sm font-normal'>{item}</span>
                </label>
              ))}

            </div>

          </div>

          {/* btn */}
          <button className='bg-[var(--color-primary)] text-white text-base font-medium h-15 w-[50%] rounded-[3px] my-6 cursor-pointer'>
            {t('It was completed')}
          </button>

        </div>
      </div>
    
    </>
  )
}

export default ContentPage