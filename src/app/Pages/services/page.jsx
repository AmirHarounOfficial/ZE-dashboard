'use client'
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import Home_Car_Module from './Home_Car_Module/Service/page';
import StreetAssistant_Module from './StreetAssistant_Module/Service/page';


function Servicespage() {
  const current_module_key ='خدمات الطريق'
  let content;

  if (current_module_key === 'خدمات السيارات' || current_module_key === 'خدمات المنازل' ) {
    content = <Home_Car_Module />;
  } else if (current_module_key === 'خدمات الطريق') {
    content = <StreetAssistant_Module />;
  } else {
    content = <div>المكون غير متاح</div>;
  }
  return (
    <>
      {content}
    </>
  )
}

export default Servicespage