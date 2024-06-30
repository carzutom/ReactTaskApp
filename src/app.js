import React from 'react'
import { useRoutes } from 'react-router-dom'

// Theme
import Theme from 'theme'

import routes from 'routes'

const App = () => {
  const content = useRoutes(routes)

  return <Theme>{content}</Theme>
}

export default App
