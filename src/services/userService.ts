import { api } from '../helpers/api'
const userServices = {
  login: async (data: any) => {
    return await (
      await api.post('/access/login', data)
    ).data
  },
  auth: async () => {
    return await (
      await api.post('/user/auth')
    ).data
  },
}

export default userServices
