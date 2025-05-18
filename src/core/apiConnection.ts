import axios from 'axios'

const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    withCredentials: false,
  })

  instance.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    // else {
    //   window.location.href = loginUrl;
    // }
    return config
  })

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        window.localStorage.removeItem('token')
        // Cookies.remove('token');
      }
      return Promise.reject(error)
    },
  )

  return instance
}

export default createAxiosInstance(import.meta.env.VITE_API_BASE_URL)
