import { ref } from 'vue'
import type { Product } from '@entities/product'
import cardPlaceholder from '~/assets/images/card_placeholder.png'

// Мок-данные для преимуществ
const defaultAdvantages = [
  { id: '1', icon: 'shield-check', text: 'advantages.regulatorTrusted' },
  { id: '2', icon: 'lock', text: 'advantages.tamperProof' },
  { id: '3', icon: 'lightning', text: 'advantages.lightningTurnaround' },
  { id: '4', icon: 'wrench', text: 'advantages.encryption' },
  { id: '5', icon: 'satellite', text: 'advantages.realTimeTracking' },
  { id: '6', icon: 'headphones', text: 'advantages.prioritySupport' }
]

// Мок-данные для продуктов
const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
    status: 'popular',
    advantages: defaultAdvantages
  },
  {
    id: '2',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
    status: 'popular',
    image: cardPlaceholder,
    advantages: defaultAdvantages
  },
  {
    id: '3',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
    status: 'new',
    advantages: defaultAdvantages
  },
  {
    id: '4',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
    status: null,
    advantages: defaultAdvantages
  },
  {
    id: '5',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
    status: 'new',
    advantages: defaultAdvantages
  },
  {
    id: '6',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
    status: 'popular',
    advantages: defaultAdvantages
  }
]

export const useProducts = () => {
  const products = ref<Product[]>(mockProducts)

  return {
    products
  }
}

