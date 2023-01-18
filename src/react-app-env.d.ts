/// <reference types="react-scripts" />

export interface tech {
  id: number
  code: string
  name: string
  image: string
  learnedAt: {
    code: string
  }[] | []
  badgets: {
    name: string
    page: string
    url: string
    image: string
  }[] | []
}