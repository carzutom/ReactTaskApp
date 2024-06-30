export const TASK_CREATED = 'TASK:NEW:TASK'

export const createTask = (task) => ({
  type: TASK_CREATED,
  task,
})
