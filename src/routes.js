import React from 'react'
import { Navigate } from 'react-router-dom'

import { MinimalLayout } from 'layouts'

// Pages
import HomePage from 'pages/home'
import NotFound from 'pages/not-found'

const routes = [
  {
    path: '/',
    element: <MinimalLayout />,
    children: [
      { index: true, element: <Navigate to='/home' replace={true} /> },
      { path: '/home', element: <HomePage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]

export default routes
