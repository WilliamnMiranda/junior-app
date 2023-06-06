import { api } from '../helpers/api'
const subscriptionServices = {
  getAll: async () => {
    return await (
      await api.get('/subscription/user/projects')
    ).data
  },
  getMySubscriptionsProject: async () => {
    return await (
      await api.get('/subscription/projects')
    ).data
  },
}

export default subscriptionServices
