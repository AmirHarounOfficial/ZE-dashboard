'use client'
import React, { useEffect, useState } from 'react'
import HaveTerms_PoliciesPage from './HaveTerms_Policies/page'
import NoTerms_PoliciesPage from './NoTerms_Policies/page'
import Addpage from './Add/page'
import EditPage from './Edit/page'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { getPoliciesThunk } from '@/redux/slice/Setting/SettingSlice'

function Terms_PoliciesPage() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)

  //api
  const dispatch = useDispatch()
  const {policies,loading,error} = useSelector((state)=>state.setting)
  useEffect(()=>{
    dispatch(getPoliciesThunk())
  },[dispatch])
  return (
    <>
    <div className="border border-[#E3E8EF] mb-8">
      <Header/>
      
      {showEditForm ? (
        <EditPage />
      ) : showAddForm ? (
        <Addpage />
      ) : policies && policies.length > 0 ? (
        <HaveTerms_PoliciesPage  
          onAddClick={() => setShowAddForm(true)} 
          onEditClick={() => setShowEditForm(true)}
          policies={policies}
          loading={loading}

        />
      ) : (
        <NoTerms_PoliciesPage 
          onAddClick={() => setShowAddForm(true)} 
        />
      )}

    </div>
    </>
  )
}

export default Terms_PoliciesPage