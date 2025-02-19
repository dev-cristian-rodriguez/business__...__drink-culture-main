export interface NavbarItem {
  id: number
  icon: any
  path?: null | string
  text: string
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
