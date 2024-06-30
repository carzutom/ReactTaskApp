import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'

import { Menu, MenuOption } from './components'

const HomePage = () => {
  return (
    <MDBContainer className='h-100'>
      <Menu>
        <MenuOption name='Tasks' color='success' url='/tasks' />
        <MenuOption name='List' color='warning' url='/list' />
      </Menu>
    </MDBContainer>
  )
}

export default HomePage
