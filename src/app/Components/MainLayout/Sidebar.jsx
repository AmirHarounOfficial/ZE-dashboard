"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/slice/Auth/AuthSlice';



function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null);

    const pathname = usePathname();

    //🟢logout
    const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());      
    setIsSidebarOpen(false);
    router.push("/Auth/Login"); 
  }

const [openFinance, setOpenFinance] = useState(false);

{/* Logic for dashboard redirection */}
      // const handleDashboardClick = (e) => {
      //     e.preventDefault();
      //     setIsSidebarOpen(false);

      //     // const userData = localStorage.getItem('user');
      //     // let targetPath = '/Pages/dashboard/Main'; 

      //     // if (userData) {
      //     //   try {
      //     //     const user = JSON.parse(userData);
      //     //     const { current_module_key } = user;

      //     //     switch (current_module_key) {
      //     //       case 'home_services':
      //     //         targetPath = '/Pages/Home/Home_services';
      //     //         break;
      //     //       case 'delivery':
      //     //         targetPath = '/Pages/Home/Delivery_services';
      //     //         break;
      //     //       case 'property_rental':
      //     //         targetPath = '/Pages/Home/Renting_houses';
      //     //         break;
      //     //       case 'queue':
      //     //         targetPath = '/Pages/Home/Restaurant_reservations';
      //     //         break;
      //     //       case 'street_assistant':
      //     //         targetPath = '/Pages/Home/Road_assistant';
      //     //         break;
      //     //       case 'car_services':
      //     //         targetPath = '/Pages/Home/Car_services';
      //     //         break;
      //     //       default:
      //     //         targetPath = '/Pages/dashboard/Main';
      //     //         break;
      //     //     }
      //     //   } catch (error) {
      //     //     console.error("Error parsing user data:", error);
      //     //   }
      //     // }
      //     // router.push(targetPath);
      // };

      return (
    
    // 1440px and above
    <aside
      className={`
        ${isSidebarOpen ? "block" : "hidden"}   /* ✅ في الموبايل/تابلت */
        lg1:flex flex-col h-screen border-x border-[#E3E8EF] transition-all p-4 duration-200
        ${open ? "w-70" : "w-18"}               /* ✅ ده بس للشاشات الكبيرة */
        bg-white fixed lg:static z-50 top-0 right-0
      `}
    >



      {/* Logo open and close */}
      <button
        onClick={() => {
            // ✅ Desktop
            if (window.innerWidth >= 1340) { 
              setOpen(!open);
            }
          }}
        className="w-full flex justify-center mt-10 mb-14 cursor-pointer "
      >
        {open ?(
          <div className='flex gap-2 items-center'>
            <img src='/images/LogoText.svg' alt="dd" />
            <img src='/images/Logo.svg' alt="dd" />
          </div>
        
        ):(
          <div className='flex items-center '>
            <img src='/images/Logo.svg' alt="dd" />
          </div>
        )}
      </button>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className='flex flex-col h-full'>

          <li className={`cursor-pointer  rounded ${pathname.startsWith("/Pages/dashboard") || pathname.startsWith("/Pages/Home") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/Pages/Home/Services"  >
                {open?(
                //open 
                  <div  className='flex gap-4 items-center py-4 px-2'>
                    <img src="/images/icons/dashboard.svg" alt="" className={pathname.startsWith("/Pages/dashboard") || pathname.startsWith("/Pages/Home") ? "invert" : ""}/>
                    <p className={`text-base font-normal ${pathname.startsWith("/Pages/dashboard") || pathname.startsWith("/Pages/Home") ? "text-[#fff]" : "text-[#364152]"}`}>{t('dashboard')}</p>
                  </div>
                ):(
                  <div className='flex justify-center items-center py-2 px-2'>
                    <img src="/images/icons/dashboard.svg" alt="" className={pathname.startsWith("/Pages/dashboard") || pathname.startsWith("/Pages/Home")? "invert" : ""}/>
                  </div>
                )}
            </Link>
          </li>

          <li  className={`cursor-pointer  rounded ${pathname.startsWith("/Pages/requests") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/Pages/requests" onClick={() => setIsSidebarOpen(false)}>
                {open?(
                //open 
                  <div  className='flex gap-4 items-center py-4 px-2'>
                    <img src="/images/icons/Requests.svg" alt="" className={pathname.startsWith("/Pages/requests") ? "invert" : ""}/>
                    <p className={`text-base font-normal ${pathname.startsWith("/Pages/requests") ? "text-[#fff]" : "text-[#364152]"}`}>{t('Requests')}</p>
                  </div>
                ):(
                  <div className='flex justify-center items-center py-2 px-2'>
                    <img src="/images/icons/Requests.svg" alt="" className={pathname.startsWith("/Pages/requests") ? "invert" : ""}/>
                  </div>
                )}
            </Link>
          </li>

          <li  className={`cursor-pointer  rounded ${pathname.startsWith("/Pages/workers") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/Pages/workers" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center py-4 px-2'>
                  <img src="/images/icons/workers.svg" alt="" className={pathname.startsWith("/Pages/workers") ? "invert" : ""}/>
                  <p className={`text-base font-normal ${pathname.startsWith("/Pages/workers") ? "text-[#fff]" : "text-[#364152]"}`}>{t('workers')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center py-4 px-2'>
                  <img src="/images/icons/workers.svg" alt="" className={pathname.startsWith("/Pages/workers") ? "invert" : ""}/>
                </div>
              )}
            </Link>
          </li>

          <li  className={`cursor-pointer  rounded ${pathname.startsWith("/Pages/Services") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/Pages/Services" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center py-4 px-2'>
                  <img src="/images/icons/Services.svg" alt="" className={pathname.startsWith("/Pages/Services") ? "invert" : ""}/>
                  <p className={`text-base font-normal ${pathname.startsWith("/Pages/Services") ? "text-[#fff]" : "text-[#364152]"}`}>{t('Services')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center py-2 px-2'>
                  <img src="/images/icons/Services.svg" alt="" className={pathname.startsWith("/Pages/Services") ? "invert" : ""}/>
                </div>
              )}
            </Link>
          </li>

          <li  className={`cursor-pointer  rounded ${pathname.startsWith("/Pages/Subscription") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/Pages/Subscription" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center py-4 px-2'>
                  <img src="/images/icons/Subscription.svg" alt="" className={pathname.startsWith("/Pages/Subscription") ? "invert" : ""}/>
                  <p className={`text-base font-normal ${pathname.startsWith("/Pages/Subscription") ? "text-[#fff]" : "text-[#364152]"}`}>
                    {t('Subscription')}
                  </p>
                </div>
              ):(
                <div className='flex justify-center items-center py-4 px-2'>
                  <img src="/images/icons/Subscription.svg" alt="" className={pathname.startsWith("/Pages/Subscription") ? "invert" : ""}/>
                </div>
              )}
            </Link>
          </li>

          <li  className={`cursor-pointer rounded ${pathname.startsWith("/Pages/conversations") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/Pages/conversations" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center py-4 px-2'>
                  <img src="/images/icons/conversations.svg" alt="" className={pathname.startsWith("/Pages/conversations") ? "invert" : ""}/>
                  <p className={`text-base font-normal ${pathname.startsWith("/Pages/conversations") ? "text-[#fff]" : "text-[#364152]"}`}>{t('conversations')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center py-2 px-2'>
                  <img src="/images/icons/conversations.svg" alt="" className={pathname.startsWith("/Pages/conversations") ? "invert" : ""}/>
                </div>
              )}
            </Link>
          </li>

          {/* <li  className={`cursor-pointer  rounded ${pathname.startsWith("/Pages/finance") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/Pages/finance" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center py-4 px-2'>
                  <img src="/images/icons/Finance.svg" alt="" className={pathname.startsWith("/Pages/finance") ? "invert" : ""}/>
                  <p className={`text-base font-normal${pathname.startsWith("/Pages/finance") ? "text-[#fff]" : "text-[#364152]"}`}>{t('Finance')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center py-2 px-2'>
                  <img src="/images/icons/Finance.svg" alt="" className={pathname.startsWith("/Pages/finance") ? "invert" : ""} />
                </div>
              )}
            </Link>
          </li> */}

          {/* Finance Dropdown */}
          <li className={` cursor-pointer rounded transition ${pathname.startsWith("/Pages/finance") ? "bg-[var(--color-primary)] text-white" : ""}`}>
            <div
              onClick={() => setOpenFinance(!openFinance)}
              className={`flex items-center justify-between ml-5 `}
            >
            
              <div className={`${open ? "flex gap-4" : "flex justify-center"}  items-center py-4 px-2`}>
                <img
                  src="/images/icons/Finance.svg"
                  alt=""
                  className={pathname.startsWith("/Pages/finance") ? "invert" : ""}
                />

                {/* Text (visible only when sidebar open) */}
                {open && (
                  <p
                    className={`text-base font-normal ${
                      pathname.startsWith("/Pages/finance")
                        ? "text-white"
                        : "text-[#364152]"
                    }`}
                  >
                    {t("Finance")}
                  </p>
                )}
              </div>
              {/* Arrow (only if sidebar is open) */}
              {open && (
                <span className={``}>
                  {openFinance ? (
                    <img src="/images/icons/arrow-up.svg" alt="open" className='' />
                  ) : (
                    <img src="/images/icons/chevron-down.svg" alt="closed" />
                  )}
                </span>
              )}

            </div>
          </li>
          {/* Dropdown Items */}
          {openFinance && open && (
            <ul className="w-full flex flex-col  bg-[#F9F5E8] px-2 py-3">

              <li className={`px-2 py-3  ${pathname === "/Pages/finance/Overview" ? "bg-[#F4EAD0] " : "text-[#364152]"}`}>
                <Link
                  href="/Pages/finance/Overview"
                  onClick={() => setIsSidebarOpen(false)}
                  className="block text-[#364152] "
                >
                  {t("Overview")}
                </Link>
              </li>

              <li className={`px-2 py-3  ${pathname === "/Pages/finance/Taxes" ? "bg-[#F4EAD0] " : "text-[#364152]"}`}>
                <Link
                  href="/Pages/finance/Taxes"
                  onClick={() => setIsSidebarOpen(false)}
                  className="block text-[#364152] "
                >
                  {t("Taxes")}
                </Link>
              </li>

              <li className={`px-2 py-3  ${pathname === "/Pages/finance/wallet" ? "bg-[#F4EAD0] " : "text-[#364152]"}`}>
                <Link
                  href="/Pages/finance/wallet"
                  onClick={() => setIsSidebarOpen(false)}
                  className="block text-[#364152] "
                >
                  {t("wallet")}
                </Link>
              </li>

            </ul>
          )}





          <li className={`cursor-pointer  rounded ${pathname.startsWith("/Pages/technicalSupport") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/Pages/technicalSupport" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center py-4 px-2'>
                  <img src="/images/icons/dashboard.svg" alt="" className={pathname.startsWith("/Pages/technicalSupport")  ? "invert" : ""} />
                  <p className={`text-base font-normal ${pathname.startsWith("/Pages/technicalSupport") ? "text-[#fff]" : "text-[#364152]"}`}>{t('technical support')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center py-2 px-2'>
                  <img src="/images/icons/dashboard.svg" alt="" className={pathname.startsWith("/Pages/technicalSupport")  ? "invert" : ""}/>
                </div>
              )}
            </Link>
          </li>


      
          <li  className={`cursor-pointer  rounded  mt-auto mb-2 ${pathname.startsWith("/Pages/settings") ? "bg-[#C69815] text-[#fff]" : ""}`}>
          <Link href="/Pages/settings" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center py-4 px-2'>
                  <img src="/images/icons/settings.svg" alt=""className={pathname.startsWith("/Pages/settings") ? "invert" : ""} />
                  <p className={`text-base font-normal ${pathname.startsWith("/Pages/settings") ? "text-[#fff]" : "text-[#364152]"}`}>{t('Settings')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center py-2 px-2'>
                  <img src="/images/icons/settings.svg" alt="" className={pathname.startsWith("/Pages/settings") ? "invert" : ""}/>
                </div>
              )}
          </Link>
          </li>
          
          <li  onClick={handleLogout} className={`cursor-pointer py-2 px-2 rounded ${pathname.startsWith("/signout") ? "bg-[#C69815] text-[#fff]" : ""}`}>
          <button >
              {open?(
              //open 
                <div className='flex gap-4 items-center cursor-pointer'>
                  <img src="/images/icons/signout.svg" alt="" />
                  <p className='text-[#D92D20] text-base font-normal'>{t('Sign out')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center cursor-pointer'>
                  <img src="/images/icons/signout.svg" alt="" />
                </div>
            )}
          </button>

          </li>
    

        </ul>
      </nav>

    

    </aside>
  );
  
}

export default Sidebar;


