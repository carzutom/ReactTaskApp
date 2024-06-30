import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MDBBtn, MDBCol } from 'mdb-react-ui-kit'

const MenuOption = ({ name, url, color = 'info' }) => {
  const navigate = useNavigate()

  const goToUrl = () => {
    navigate(url)
  }

  return (
    <MDBCol
      size='12'
      className='d-flex justify-content-center align-items-center mb-4'
    >
      <div className='d-grid' style={{ width: 200, height: 100 }}>
        <MDBBtn onClick={goToUrl} className='fs-2' color={color}>
          {name}
        </MDBBtn>
      </div>
    </MDBCol>
  )
}

export default MenuOption
