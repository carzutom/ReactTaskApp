import axios from 'axios'
import * as AxiosLogger from 'axios-logger'

const logConfig = {
  prefixText: 'API',
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

if (process.env.NODE_ENV === 'development') {
  instance.interceptors.request.use(
    (request) => AxiosLogger.requestLogger(request, logConfig),
    (err) => AxiosLogger.errorLogger(err, logConfig)
  )
  instance.interceptors.response.use(
    (response) => AxiosLogger.responseLogger(response, logConfig),
    (err) => AxiosLogger.errorLogger(err, logConfig)
  )
}

export const fetchContacts = () => instance.get('/elements')
