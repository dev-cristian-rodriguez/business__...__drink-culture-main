export interface NavbarItem {
  id: number
  icon: any
  path?: null | string
  text: string
  event?: Function
}

export interface User {
  id: number
  name: string
  email: string
}

export interface Product {
  id: number
  name: string
  price: number
  category: string
}

export interface ThumbnailImage {
  id: number
  url: string
  selected: boolean
}
