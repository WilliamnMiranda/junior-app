export interface User {
  authenticate: boolean
  cpf: number
  email: string
  name: string
  _id: string
}

export interface UserDataLogin {
  email: string
  password: string
}
