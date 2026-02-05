"use client";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IMAGE_BASE_URL } from '../../../../config/imageUrl';
import ViewPage from '@/app/Pages/Services/Home_Car_Module/Service/View/_page';

function ServiceCard({service}) {
  const { t } = useTranslation();
  // const [status, setStatus] = useState('stopped');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const StatusRender = (status) => {
    switch (status) {
      case "active":
        return (
          <div className='bg-[#DCFAE6] border border-[#067647] text-[#067647] h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/Active Status.svg" alt="" className='mt-1' />
              <span>{t('active')}</span>
            </div>
          </div>
        );
      case "inactive":
        return (
          <div className='bg-[#EFF4FF] border border-[#518BFF] text-[#004EEB] h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/inactive Status.svg" alt="" className='mt-1' />
              <span>{t('inactive')}</span>
            </div>
          </div>
        );
      case "pending":
        return (
          <div className='bg-[#FFFAEB] border border-[#F79009] text-[#DC6803] h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/pending Status.svg" alt="" className='mt-1' />
              <span>{t('pending')}</span>
            </div>
          </div>
        );
      case "stopped":
        return (
          <div className='bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/stopped Status.svg" alt="" className='mt-1' />
              <span>{t('stopped')}</span>
            </div>
          </div>
        );
      case "refused":
        return (
          <div className='bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/refused Status.svg" alt="" className='mt-1' />
              <span>{t('refused')}</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <>
      <section 
        onClick={handleClickOpen}
        className='bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.3)] px-2 py-3 rounded-[3px] cursor-pointer' >
        <div className="relative mb-5">
          <img
            src={`${IMAGE_BASE_URL}${service?.image}`}
            alt=""
            className="w-full h-43.5 rounded-[3px]"
          />
          <div className="absolute top-2.5 left-3.5 px-3 py-1">
            {/* {StatusRender(status)} */}
            {StatusRender(service?.status)}
          </div>
        </div>

        <p className='text-[#364152] text-base font-medium cursor-pointer'>
            {service?.category?.title}
        </p>

        
        

          {/* price */}
          {service?.price_on_inspection===true ?(
            <div className='flex gap-1.5 w-full  col-span-2 mt-4'>
              <img src="/images/icons/price.svg" alt="" />
              <p className='text-[#C69815] text-base font-medium'>{t('Price upon viewing')}</p>
            </div>
          ):(
            <div className='grid grid-cols-2 mt-4 w-full '>
              <div className='flex gap-1.5 w-full '>
                <img src="/images/icons/price.svg" alt="" />
                <p className='text-[#C69815] text-lg font-medium'>{service?.sale_price}{t('Pound')}</p>
              </div>
                {/* sale price */}
          {service?.sale_price && Number(service.sale_price) !== 0 && Number(service.price) !== 0 && (
              <div className="flex items-center gap-1.5 w-full mr-1.5  ">
                <img src="/images/icons/sale price.svg" alt="" className="w-6 h-6" />
                <p className="text-[#D92D20] font-medium text-sm line-through">
                  {service?.price} جنية
                </p>
              </div>
            )}
          </div>
          )}

        
          
        

        <div className='grid grid-cols-2 gap-4 mt-4 '>
          {/* Revenues */}
          <div className='flex gap-1.5 '>
            <img src="/images/icons/Revenues.svg" alt="" className='w-6 h-6 ' />
            <p className='text-sm font-normal'>
              <span className='text-[#697586] ml-1'>{t('Revenues')}</span>
              <span className='text-[#C69815]'> {service?.bookings_sum_price == null ? '0' : service?.bookings_sum_price} {t('Pound')}</span>
            </p>
          </div>
          
          {/* Requests */}
          <div className='flex gap-1.5 '>
            <img src="/images/icons/RequestsNumber.svg" alt="" className='w-6 h-6 '/>
            <p className='text-[#697586] text-sm font-normal'>{t('Requests')} {service?.bookings_count}</p>
          </div>
          
          {/* Available areas */}
          <div className='flex gap-1.5  w-full'>
            <img src="/images/icons/Available areas.svg" alt="" className='w-6 h-6 ' />
            <p className='text-sm font-normal'>
              <span className='text-[#697586] '>{t('areas')}</span>
              <span className='text-[#C69815]'>
                ({service?.areas?.length || 0}+)
              </span>
            </p>
          </div>

          
          
          {/* View */}
          <div className='flex gap-1.5 w-full'>
            <img src="/images/icons/view.svg" alt="" className='text-[#8B8B8B] w-6 h-6' />
            <p className='text-[#697586] text-sm font-normal'>{service?.views_count} {t('View')}</p>
          </div>

        </div>

      </section>

      {/* ✅ Use the client-safe component */}
      <ViewPage open={open} handleClose={handleClose} serviceId={service?.id} />
    </>
  );
}

export default ServiceCard;
