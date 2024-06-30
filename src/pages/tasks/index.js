import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'

import { NewTaskButton, TaskList } from './components'

const TasksPage = () => {
  return (
    <MDBContainer className='h-100'>
      <NewTaskButton />

      <TaskList />
    </MDBContainer>
  )
}

export default TasksPage
