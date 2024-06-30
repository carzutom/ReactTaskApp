import React from 'react'
import { Outlet } from 'react-router-dom'

const MinimalLayout = () => (
  <main className='vh-100'>
    <Outlet />
  </main>
)

export default MinimalLayout
