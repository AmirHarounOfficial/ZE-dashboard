'use client'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function SidebarMenuPage({ selectedMenu, setSelectedMenu }) {
  const {t}= useTranslation()
    const [openDropdown, setOpenDropdown] = useState(null)
    const current_module_key ='خدمات المنازل'   // 'خدمات الطريق'    'خدمات المنازل'

    

    const menuHomeCarItems = [
      {id:1 , Label:'Terms and Policies', name:t('Terms and Policies'), icon:'/images/icons/Terms and Policies_Black.svg', iconSelected:'/images/icons/Terms and Policies_White.svg'},
      {id:2 , Label:'Workplaces', name:t('Workplaces'), icon:'/images/icons/maps-location_Black.svg', iconSelected:'/images/icons/maps-location.svg'},
      {id:3 , Label:'Working hours', name:t('Working hours'), icon:'/images/icons/date-time-black.svg', iconSelected:'/images/icons/date-time-white.svg'},
      {id:4 , Label:'Legal documents', name:t('Legal documents'), icon:'/images/icons/document-attachment_black.svg', iconSelected:'/images/icons/document-attachment_white.svg'},
      {id:5 , Label:'Reviews', name:t('Reviews'), icon:'/images/icons/star_black.svg', iconSelected:'/images/icons/star_white.svg'},
    ];

    const menuStreetItems = [
      {id:1 , Label:'Terms and Policies', name:t('Terms and Policies'), icon:'/images/icons/Terms and Policies_Black.svg', iconSelected:'/images/icons/Terms and Policies_White.svg'},
      {id:2 , Label:'Workplaces', name:t('Workplaces'), icon:'/images/icons/maps-location_Black.svg', iconSelected:'/images/icons/maps-location.svg'},
      {id:4 , Label:'Legal documents', name:t('Legal documents'), icon:'/images/icons/document-attachment_black.svg', iconSelected:'/images/icons/document-attachment_white.svg'},
      {id:5 , Label:'Reviews', name:t('Reviews'), icon:'/images/icons/star_black.svg', iconSelected:'/images/icons/star_white.svg'},
    ];

    let menuItems
    switch (current_module_key) {
      case 'خدمات السيارات':
      case 'خدمات المنازل':
        menuItems = menuHomeCarItems
        break

      case 'خدمات الطريق':
        menuItems = menuStreetItems
        break

      default:
        menuItems = menuHomeCarItems
    }

  return (
    <>
      <ul className='py-6 px-4 shadow-[0_0_4px_0_rgba(0,0,0,0.25)]'>
        {menuItems.map((item) => {
          const isSelected = selectedMenu === item.id 
          
          return (
          <div key={item.id}>
            <li 
              className={`p-3 text-base font-normal cursor-pointer transition-colors flex items-center gap-3 justify-between ${
                isSelected 
                  ? 'bg-[var(--color-primary)] text-white' 
                  : 'hover:bg-gray-100 text-[#364152]'
              }`}
                onClick={() => {
                  setSelectedMenu(item.id)
                }}
              
            >
              <div className="flex items-center gap-3">
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