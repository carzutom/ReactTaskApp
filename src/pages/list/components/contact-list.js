import React from 'react'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit'

const ContactList = () => {
  const tasks = useSelector((state) => state.contact.list)

  return (
    <>
      <label className='fs-2 fw-bold my-4'>Contacts</label>

      <MDBListGroup>
        {tasks.map(({ name, avatar }, key) => (
          <MDBListGroupItem key={key}>
            <div className='d-flex align-items-center'>
              <Avatar alt={name} src={avatar} className='me-2' />
              {name}
            </div>
          </MDBListGroupItem>
        ))}
      </MDBListGroup>
    </>
  )
}

export default ContactList
