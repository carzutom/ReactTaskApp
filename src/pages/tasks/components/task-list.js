import React from 'react'
import { useSelector } from 'react-redux'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.list)

  return (
    <>
      <label className='fs-2 fw-bold mb-2'>Tasks</label>

      <MDBListGroup>
        {tasks.map(({ name }, key) => (
          <MDBListGroupItem key={key}>{name}</MDBListGroupItem>
        ))}
      </MDBListGroup>
    </>
  )
}

export default TaskList
