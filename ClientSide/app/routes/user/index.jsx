import { Outlet } from '@remix-run/react'
import React from 'react'

function index() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default index
