import { api } from '../helpers/api'
const projectServices = {
  create: async (data: any) => {
    return await (
      await api.post('/project/create', data)
    ).data
  },
  auth: async () => {
    return await (
      await api.post('/user/auth')
    ).data
  },
}

export default projectServices
