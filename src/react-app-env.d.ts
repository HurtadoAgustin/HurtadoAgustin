/// <reference types="react-scripts" />

export interface Tech {
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

export interface Project {
  id: number
  name: string
  isWork: boolean
  image: string
  description: {
    english: string
    spanish: string
  }
  urls: {
    repo: string
    website: string
  }
  techs: string[]
}

export type InputFormState = {
  type: string
  value: string
  onChange: Function
}

export type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

type InputTypes = "text" | "textarea" | "email" | "tel" | "button"

export interface InputFormData {
  register?: Function
  label: string
  type?: InputTypes
  min?: number
  max?: number
  required?: boolean
  sm?: number
  rules?: {
    pattern: {
      value: RegExp
      message: string
    }
  } | {}
}
