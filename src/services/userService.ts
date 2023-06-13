import { api } from '../helpers/api'
import { UserDataLogin } from '../interfaces/user'
const userServices = {
  login: async (data: UserDataLogin) => {
    return await (
      await api.post('/user/login', data)
    ).data
  },
  auth: async () => {
    return await (
      await api.post('/user/auth')
    ).data
  },
}

export default userServices
