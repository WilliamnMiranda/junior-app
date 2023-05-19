import { api } from '../helpers/api'
const languagesServices = {
  getAll: async () => {
    return await (
      await api.get('/options')
    ).data
  },
}

export default languagesServices
