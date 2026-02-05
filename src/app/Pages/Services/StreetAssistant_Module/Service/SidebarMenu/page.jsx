'use client'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function SidebarMenuPage({ selectedMenu, setSelectedMenu }) {
  const {t}= useTranslation()
    const [openDropdown, setOpenDropdown] = useState(null)
    
    const menuItems = [
      {Label:'Battery operation', name:t('Battery operation'), icon:'/images/icons/Battery operation.svg', iconSelected:'/images/icons/Battery operationWhite.svg'},
      {Label:'Wheel repair', name:t('Wheel repair'), icon:'/images/icons/Wheel repair.svg', iconSelected:'/images/icons/Wheel repairWhite.svg'},
      {Label:'Car transport', name:t('Car transport'), icon:'/images/icons/Car transport.svg', iconSelected:'/images/icons/Car transportWhite.svg'},
      {Label:'Car unlock', name:t('Car unlock'), icon:'/images/icons/Car unlock.svg', iconSelected:'/images/icons/Car unlockWhite.svg'},
      {Label:'Fuel delivery', name:t('Fuel delivery'), icon:'/images/icons/Fuel delivery.svg', iconSelected:'/images/icons/Fuel deliveryWhite.svg'},
      {Label:'General maintenance', name:t('General maintenance'), icon:'/images/icons/General maintenance.svg', iconSelected:'/images/icons/General maintenanceWhite.svg'},

    ]
    
    const toggleDropdown = (label) => {
      setOpenDropdown(openDropdown === label ? null : label)
    }
  return (
    <>
          <ul className='py-6 px-4 shadow-[0_0_4px_0_rgba(0,0,0,0.25)]'>
        {menuItems.map((item) => {
          const isSelected = selectedMenu === item.Label || item.subItems?.some(subItem => subItem.Label === selectedMenu)
          
          return (
          <div key={item.Label}>
            <li 
              className={`p-3 text-base font-normal cursor-pointer transition-colors flex items-center gap-3 justify-between ${
                isSelected 
                  ? 'bg-[var(--color-primary)] text-white' 
                  : 'hover:bg-gray-100 text-[#364152]'
              }`}
                onClick={() => {
                if (item.subItems) {
                  toggleDropdown(item.Label)
                } else {
                  setSelectedMenu(item.Label)
                }
              }}
              
            >
              <div className="flex items-center gap-6">
                {isSelected ?(
                  <img src={item.iconSelected} alt={item.Label} className="w-5 h-5" />
                  ):(
                  <img src={item.icon} alt={item.Label} className="w-5 h-5" />
                  )
                }
                {item.name}
              </div>
            
            </li>
            
          

          </div>
          )
        })}
      </ul>
    </>
  )
}

export default SidebarMenuPage