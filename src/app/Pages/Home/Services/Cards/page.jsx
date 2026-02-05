'use client';
import React from 'react'
import HomeAndCarServiceCardPages from './HomeAndCarServiceCard/pages'
import StreetAssistantServiceCardPage from './StreetAssistantServiceCard/page';

function CardsPage({ current_module_key }) {
  let content;

  if (current_module_key === 'خدمات السيارات' ||current_module_key === 'خدمات المنازل' ) {
    content = <HomeAndCarServiceCardPages />;
  } else if (current_module_key === 'خدمات الطريق') {
    content = <StreetAssistantServiceCardPage />;
  } else {
    content = <div>المكون غير متاح</div>;
  }

  return (
    <>
      {content}
    </>
  )
}

export default CardsPage