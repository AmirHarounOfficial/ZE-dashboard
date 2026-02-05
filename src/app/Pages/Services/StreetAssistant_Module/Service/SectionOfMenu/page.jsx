import React from 'react'
import BatteryOperationPage from './BatteryOperation/page'
import WheelRepairPage from './WheelRepair/page'
import CarTransportPage from './CarTransport/page'
import CarUnlockPage from './CarUnlock/page'
import FuelDeliveryPage from './FuelDelivery/page'
import GeneralMaintenancePage from './GeneralMaintenance/page'

function SectionOfMenuPage({selectedMenu}) {

  const renderContent =()=>{
    switch(selectedMenu){
      case 'Battery operation':
        return (
          <BatteryOperationPage/>
        )
      case 'Wheel repair':
        return (
          <WheelRepairPage/>
        )
      case 'Car transport':
        return(
          <CarTransportPage/>
        )
      case 'Car unlock':
        return(
          <CarUnlockPage/>
        )
      case 'Fuel delivery':
        return(
          <FuelDeliveryPage/>
        )
      case 'General maintenance':
        return(
          <GeneralMaintenancePage/>
        )
    }
  }
  return (
    <>
    {renderContent()}
    </>
  )
}

export default SectionOfMenuPage