"use client";
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


function AnalysisPage({handleClose}) {
  const {t} = useTranslation()
  const value = 1;
  const isPositive = value >= 0;

  const valuee = -2;
    const isNegative = valuee >= 0;



    //

  const [chartOptions] = useState({
    chart: {
      id: "stacked-bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 4,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val}K`,
        style: {
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    fill: {
      opacity: 1,
      colors: ["#C69815", "#946DF1"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      markers: {
        radius: 12,
      },
      labels: {
        colors: "#000",
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: "40%",
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}K`,
      },
    },
  });

  const [seriesData] = useState([
    {
      name: "الدفع بالكارت",
      data: [70, 40, 30, 80, 160, 50, 30],
    },
    {
      name: "الدفع النقدي",
      data: [40, 60, 40, 50, 29, 30, 40],
    },
  ]);


  return (
    <>
      <div className='grid grid-cols-2 gap-4 px-6 mt-8'>

        <section className='border border-[#CDD5DF] p-3' >
          {/* tittle */}
          <div className='flex gap-1.5 mb-2.5'>
            <p className='bg-[#B4F0CC] w-8 h-8 flex justify-center items-center rounded-[6.211px]'>
              <img src="/images/icons/earnings.svg" alt="" />
            </p>
            <p className='text-[#313131] text-base font-medium flex items-center'>{t('earnings')}</p>
          </div>
          {/* number of earnings */}
          <p className='text-[#202939] text-base font-semibold mb-2.5'>187K</p>

          <div className="flex gap-1">
            <p className="text-[#697586] text-sm font-light">{t("From last week")}</p>

            <div className="flex gap-1 items-center">
              <p
                className={`flex text-sm font-medium ${
                  isPositive ? "text-[#17B26A]" : "text-[#F04438]"
                }`}
              >
                <span>%</span>
                <span>{Math.abs(value)}</span>
              </p>

              <img
                src={
                  isPositive
                    ? "/images/icons/upArrow green.svg"
                    : "/images/icons/downArrow red.svg"
                }
                alt=""
              />
            </div>
          </div>
        </section>


        <section className='border border-[#CDD5DF] p-3' >
          {/* tittle */}
          <div className='flex gap-1.5 mb-2.5'>
            <p className='bg-[#FEF0C7] w-8 h-8 flex justify-center items-center rounded-[6px]'>
              <img src="/images/icons/Reservations.svg" alt="" />
            </p>
            <p className='text-[#313131] text-base font-medium flex items-center'>{t('Reservations')}</p>
          </div>
          {/* number of Reservations */}
          <p className='text-[#202939] text-base font-semibold mb-2.5'>4000</p>

          <div className="flex gap-1">
            <p className="text-[#697586] text-sm font-light">{t("From last week")}</p>

            <div className="flex gap-1 items-center">
              <p
                className={`flex text-sm font-medium ${
                  isPositive ? "text-[#17B26A]" : "text-[#F04438]"
                }`}
              >
                <span>%</span>
                <span>{Math.abs(value)}</span>
              </p>

              <img
                src={
                  isPositive
                    ? "/images/icons/upArrow green.svg"
                    : "/images/icons/downArrow red.svg"
                }
                alt=""
              />
            </div>
          </div>
        </section>



        <section className='border border-[#CDD5DF] p-3' >
          {/* tittle */}
          <div className='flex gap-1.5 mb-2.5'>
            <p className='bg-[#CEE8FF] w-8 h-8 flex justify-center items-center rounded-[6.211px]'>
              <img src="/images/icons/Views.svg" alt="" />
            </p>
            <p className='text-[#313131] text-base font-medium flex items-center'>{t('Views')}</p>
          </div>
          {/* number of Views */}
          <p className='text-[#202939] text-base font-semibold mb-2.5'>900K</p>

          <div className="flex gap-1">
            <p className="text-[#697586] text-sm font-light">{t("From last week")}</p>

            <div className="flex gap-1 items-center">
              <p
                className={`flex text-sm font-medium ${
                  isPositive ? "text-[#17B26A]" : "text-[#F04438]"
                }`}
              >
                <span>%</span>
                <span>{Math.abs(value)}</span>
              </p>

              <img
                src={
                  isPositive
                    ? "/images/icons/upArrow green.svg"
                    : "/images/icons/downArrow red.svg"
                }
                alt=""
              />
            </div>
          </div>
        </section>



        <section className='border border-[#CDD5DF] p-3' >
          {/* tittle */}
          <div className='flex gap-1.5 mb-2.5'>
            <p className='bg-[#FEF3F2] w-8 h-8 flex justify-center items-center rounded-[6.211px]'>
              <img src="/images/icons/Users.svg" alt="" />
            </p>
            <p className='text-[#313131] text-base font-medium flex items-center'>{t('Users')}</p>
          </div>
          {/* number of Users */}
          <p className='text-[#202939] text-base font-semibold mb-2.5'>187K</p>

          <div className="flex gap-1">
            <p className="text-[#697586] text-sm font-light">{t("From last week")}</p>

            <div className="flex gap-1 items-center">
              <p
                className={`flex text-sm font-medium ${
                  isNegative ? "text-[#17B26A]" : "text-[#F04438]"
                }`}
              >
                <span>%</span>
                <span>{Math.abs(value)}</span>
              </p>

              <img
                src={
                  isNegative
                    ? "/images/icons/upArrow green.svg"
                    : "/images/icons/downArrow red.svg"
                }
                alt=""
              />
            </div>
          </div>
        </section>

      </div>

    <div className='px-6'>
      <div className='p-4 border border-[#CDD5DF] my-6'>

        {/* tittle */}
        <div className='flex gap-1.5 mb-3'>
          <p className='bg-[#ECFDF3] w-8 h-8 flex justify-center items-center rounded-[6.211px]'>
            <img src="/images/icons/earnings.svg" alt="" />
          </p>
          <p className='text-[#313131] text-base font-medium flex items-center'>{t('Sales')}</p>
        </div>


        <div className="p-4 ">
          <Chart
            options={chartOptions}
            series={seriesData}
            type="bar"
            width="100%"
            height={300}
          />
        </div>

      </div>

    </div>

    <div className="w-full h-px bg-[#CDD5DF] "></div>
    <div className='px-6 my-5'>
      <button onClick={handleClose} className='border border-[#C69815] text-[#C69815] h-13.5 w-40 rounded-[3px] text-base font-medium'>
        {t('cancel')}
      </button>
    </div>

    </>
  )
}

export default AnalysisPage