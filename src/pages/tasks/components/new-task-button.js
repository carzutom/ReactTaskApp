import React, { useState } from 'react'
import { MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit'

import NewTaskModal from './new-task-modal'

const NewTaskButton = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleOpen = (show) => {
    console.log('toggleOpen')
    console.log('show', show)
    setOpenModal(show ?? !openModal)
  }

  return (
    <>
      <MDBRow className='my-3'>
        <MDBCol
          size='12'
          className='d-flex justify-content-center align-items-center mb-4'
        >
          <div className='d-grid'>
            <MDBBtn
              onClick={() => toggleOpen(true)}
              className='fs-2'
              color='info'
            >
              New Task
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>

      <NewTaskModal open={openModal} toggleOpen={toggleOpen} />
    </>
  )
}

export default NewTaskButton
