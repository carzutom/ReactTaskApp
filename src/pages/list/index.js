import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MDBContainer, MDBSpinner } from 'mdb-react-ui-kit'

import { ContactList } from './components'

import * as API from 'connectors/api'

import {
  loadContacts,
  toggleLoading,
} from 'state/redux/actions/contact.actions'

const ListPage = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector((state) => state.contact.isLoading)

  useEffect(() => {
    const fetchContacts = async () => {
      dispatch(toggleLoading(true))

      try {
        const response = await API.fetchContacts()

        const list = response.data

        dispatch(loadContacts(list))
      } catch (err) {
        console.error(err)
      }

      dispatch(toggleLoading(false))
    }

    fetchContacts()
  }, [dispatch])

  return (
    <MDBContainer className='h-100'>
      {isLoading ? (
        <div className='d-flex justify-content-center my-3'>
          <MDBSpinner role='status' style={{ width: 100, height: 100 }}>
            <span className='visually-hidden'>Loading...</span>
          </MDBSpinner>
        </div>
      ) : (
        <ContactList />
      )}
    </MDBContainer>
  )
}

export default ListPage
