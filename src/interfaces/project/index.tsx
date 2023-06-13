export interface ICreateProject {
  name: string
  ownerLinkedin: string
  description: string
  level: string
  technologies: string[]
  functions: string[]
  coreTechnology: string
}

export interface IProject {
  coreTechnology: String
  level: String
  name: String
  owner: String
  participants: String[]
  technologies: String[]
  likes: Number
  description: String
  views: Number
  _id: String
}
