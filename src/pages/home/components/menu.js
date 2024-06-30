import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'

const Menu = ({ children }) => {
  return (
    <MDBRow className='align-items-center h-100'>
      <MDBCol size='md'>
        <MDBRow className='align-items-center'>{children}</MDBRow>
      </MDBCol>
    </MDBRow>
  )
}

export default Menu
