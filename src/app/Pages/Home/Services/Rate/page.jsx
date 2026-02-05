<<<<<<< HEAD
"use client";
=======
'use client';
>>>>>>> 119e90be90bbc86e31c548b40e433bae76769f5e
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function RatePage() {
  const { t } = useTranslation();
    const [expandedIndexes, setExpandedIndexes] = useState({});
  
    const toggleExpanded = (index) => {
      setExpandedIndexes((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    };
  
    const maxLength = 130;
    const text =
  "خدمة جيدة وتعامل محترم، أصلحوا المشكلة بشكل جيد والسعر كان مناسبًا.تحسين سرعة الإنجاز، لكن بشكل عام تجربة إيجابية فقط أتمنى تحسين سرعة الإنجاز، لكن بشكل عام تجربة تحسين سرعة الإنجاز، لكن بشكل عام تجربة إيجابية إيجابية.";
const isLong = text.length > maxLength;
const shortText = text.slice(0, maxLength);
const index = 0;
const expanded = expandedIndexes[index];

  return (
    <>
      <div className='border border-[#CDD5DF] rounded-[3px] my-4  p-6'>
        <div className='flex justify-between items-center'>
          <p className='text-[#0F022E] text-xl font-medium'>{t('Reviews')}</p>
          <button className='text-[var(--color-primary)] text-base font-medium cursor-pointer'>{t('More')}</button>
        </div>

        <div className='border border-[#CDD5DF] rounded-[3px] my-4 py-2 px-4 flex  gap-6'>
          <p className='text-[#0F022E] text-[40px] font-semibold'>4.5</p>
          <div className='flex flex-col justify-center items-start'>
            <p className='flex gap-1'>
              <img src="/images/icons/star.svg" alt="star" className='w-5 h-5'/>
              <img src="/images/icons/star.svg" alt="star" className='w-5 h-5'/>
              <img src="/images/icons/star.svg" alt="star" className='w-5 h-5'/>
              <img src="/images/icons/star.svg" alt="star" className='w-5 h-5'/>
            </p>
            <p className='text-[#565656] text-xl font-medium'>120</p>
          </div>
        </div>


          <div className="border-b border-[#CDD5DF]">
              <div className="flex justify-between">
                <div className="flex mb-4 gap-3">
                  <p className="bg-amber-400 w-10 h-10 flex justify-center items-center rounded-full p-2 mt-2">
                  ش
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#364152] text-base font-medium">
                    شريف اكرامي
                    </p>
                    <p className="text-[#697586] text-sm font-normal">
                      21/8/2025
                    </p>
                  </div>
                </div>

                <div className="flex items-center ">
                  <img
                    src="/images/icons/star.svg"
                    alt=""
                    className="w-4 h-4 mt-0.5 "
                  />
                  <p className="text-[#FDB022] text-sm font-medium">
                    4
                  </p>
                </div>
              </div>

            <p className="mb-4 text-[#4B5565] text-sm font-normal">
              {expanded || !isLong ? text : shortText + "... "}
              {isLong && (
                <span
                  onClick={() => toggleExpanded(index)}
                  className="text-[#4D0CE7] text-sm font-normal cursor-pointer"
                >
                  {expanded ? t("Show less") : t("Read more")}
                </span>
              )}
            </p>

            </div>
      </div>

    </>
  )
}

export default RatePage