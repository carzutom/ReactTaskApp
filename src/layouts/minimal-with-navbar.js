import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MDBNavbar, MDBContainer, MDBIcon } from 'mdb-react-ui-kit'

const MinimalWithNavbarLayout = () => (
  <>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <Link to='/home'>
          <MDBIcon icon='arrow-left' size='5x' />
        </Link>
      </MDBContainer>
    </MDBNavbar>

    <Outlet />
  </>
)

export default MinimalWithNavbarLayout
