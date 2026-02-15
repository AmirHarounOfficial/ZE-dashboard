// import React from 'react'

// function SectionOfMenuPage() {
//   return (
//     <div>SectionOfMenuPage</div>
//   )
// }

// export default SectionOfMenuPage

import React from 'react'
import Terms_PoliciesPage from './Terms_Policies/page'
import WorkplacesPage from './Workplaces/page'
import WorkingHoursPage from './WorkingHours/page'
import LegalDocumentsPage from './LegalDocuments/page'
import ReviewsPage from './Reviews/page'

function SectionOfMenuPage({selectedMenu}) {

  const renderContent =()=>{
    switch(selectedMenu){
      case 1:
        return (
          <Terms_PoliciesPage/>
        )
      case 2:
        return (
          <WorkplacesPage/>
        )
      case 3:
        return(
          <WorkingHoursPage/>
        )
      case 4:
        return(
          <LegalDocumentsPage/>
        )
      case 5:
        return(
          <ReviewsPage/>
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