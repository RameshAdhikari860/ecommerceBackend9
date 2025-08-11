import React from 'react'
import Sidebar from './Sidebar'
import Heading from './Heading'
import { Outlet } from 'react-router-dom'

const TrialLayout = () => {
  return (
 <>
 <Sidebar/>
 <Heading/>
 <Outlet/>
 
 </>
  )
}

export default TrialLayout