export interface ProductAdvantage {
  id: string
  icon: string
  text: string
}

export interface Product {
  id: string
  title: string
  description: string
  status?: string | null
  image?: string | null
  advantages?: ProductAdvantage[]
  }

