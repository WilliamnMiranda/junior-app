import { api } from '../helpers/api'
import { ICreateProject } from '../interfaces/project'
const projectServices = {
  create: async (data: ICreateProject) => {
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
