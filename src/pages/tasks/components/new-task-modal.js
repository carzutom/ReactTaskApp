import React, { useState } from 'react'
import clsx from 'clsx'
import { v4 } from 'uuid'
import { isEmpty } from 'lodash'
import { useDispatch } from 'react-redux'
import {
  MDBBtn,
  MDBModal,
  MDBInput,
  MDBModalBody,
  MDBModalTitle,
  MDBValidation,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalFooter,
  MDBModalContent,
  MDBValidationItem,
} from 'mdb-react-ui-kit'

import { createTask } from 'state/redux/actions/task.actions'

const NewTaskModal = ({ open = false, toggleOpen }) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [isInvalid, setInvalid] = useState(false)

  const onChangeName = (event) => {
    setInvalid(false)
    setName(event.target.value)
  }

  const onSave = () => {
    if (isEmpty(name)) {
      setInvalid(true)
      return
    }

    const id = v4()

    dispatch(createTask({ id, name }))

    setName('')
    toggleOpen(false)
  }

  return (
    <MDBModal tabIndex='-1' open={open} onClose={() => toggleOpen(false)}>
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>New Task</MDBModalTitle>
            <MDBBtn
              color='none'
              className='btn-close'
              onClick={() => toggleOpen(false)}
            />
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <MDBValidation className='row g-3'>
                <MDBValidationItem
                  feedback='Please provide a name'
                  className='col-md-4 w-100'
                  invalid
                >
                  <MDBInput
                    name='name'
                    label='Name'
                    value={name}
                    onChange={onChangeName}
                    labelClass='col-form-label'
                    className={clsx({ 'is-invalid': isInvalid })}
                  />
                </MDBValidationItem>
              </MDBValidation>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={() => toggleOpen(false)}>
              Close
            </MDBBtn>
            <MDBBtn onClick={onSave}>Add</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  )
}

export default NewTaskModal
