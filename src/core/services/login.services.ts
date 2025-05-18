import apiConnection from '@/core/apiConnection'

async function loginService(data: object): Promise<any> {
  const path = '/users/login-google/'

  try {
    const res = await apiConnection.post(path, data)
    return res
  } catch (error) {
    console.error('Error during login:', error)
    return error
  }
}

export default loginService
