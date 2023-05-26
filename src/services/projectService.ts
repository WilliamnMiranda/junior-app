import { api } from '../helpers/api'
const projectServices = {
  create: async (data: any) => {
    return await (
      await api.post('/project/create', data)
    ).data
  },
  recents: async () => {
    return await (
      await api.get('/project/recent')
    ).data
  },
  getOne: async (id: string) => {
    return await (
      await api.get(`/project/${id}`)
    ).data
  },
  getAll: async () => {
    return await (
      await api.get(`/project/user`)
    ).data
  },
}

export default projectServices
