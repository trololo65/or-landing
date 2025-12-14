import { ref, computed } from 'vue'
import type { Review } from '@entities/review'

// Мок-данные для отзывов
const mockReviews: Review[] = [
  {
    id: '1',
    name: 'John Johnson',
    avatar: '',
    review: 'Fast Track turned a regulatory headache into a same-day formality — we had fully approved KYC packs in eight hours, zero rework. The quality was exceptional and the support team was incredibly responsive throughout the process.',
    replays: [
      { id: '1-1', name: 'Sarah Smith', avatar: '' },
      { id: '1-2', name: 'Mike Davis', avatar: '' },
    ]
  },
  {
    id: '2',
    name: 'John Johnson',
    avatar: '',
    review: 'Fast Track turned a regulatory headache into a same-day formality — we had fully approved KYC packs in eight hours, zero rework.',
    replays: [
      { id: '2-1', name: 'Emily Brown', avatar: '' },
      { id: '2-2', name: 'Tom Wilson', avatar: '' },
      { id: '2-3', name: 'Lisa Anderson', avatar: '' },
    ]
  },
  {
    id: '3',
    name: 'John Johnson',
    avatar: '',
    review: 'Fast Track turned a regulatory headache into a same-day formality — we had fully approved KYC packs in eight hours, zero rework. The quality was exceptional.',
    replays: [
      { id: '3-1', name: 'David Lee', avatar: '' },
    ]
  },
  {
    id: '4',
    name: 'John Johnson',
    avatar: '',
    review: 'Fast Track turned a regulatory headache into a same-day formality — we had fully approved KYC packs in eight hours, zero rework. The quality was exceptional and the support team was incredibly responsive.',
    replays: [
      { id: '4-1', name: 'Jessica Taylor', avatar: '' },
      { id: '4-2', name: 'Robert Martinez', avatar: '' },
    ]
  },
  {
    id: '5',
    name: 'John Johnson',
    avatar: '',
    review: 'Fast Track turned a regulatory headache into a same-day formality — we had fully approved KYC packs in eight hours, zero rework.',
    replays: []
  },
  {
    id: '6',
    name: 'John Johnson',
    avatar: '',
    review: 'Fast Track turned a regulatory headache into a same-day formality — we had fully approved KYC packs in eight hours, zero rework. The quality was exceptional.',
    replays: [
      { id: '6-1', name: 'Amanda White', avatar: '' },
      { id: '6-2', name: 'Chris Thompson', avatar: '' },
      { id: '6-3', name: 'Nicole Garcia', avatar: '' },
    ]
  },
  {
    id: '7',
    name: 'John Johnson',
    avatar: '',
    review: 'Fast Track turned a regulatory headache into a same-day formality — we had fully approved KYC packs in eight hours, zero rework. The quality was exceptional and the support team was incredibly responsive throughout the process.',
    replays: [
      { id: '7-1', name: 'Daniel Harris', avatar: '' },
    ]
  },
  {
    id: '8',
    name: 'John Johnson',
    avatar: '',
    review: 'Fast Track turned a regulatory headache into a same-day formality — we had fully approved KYC packs in eight hours, zero rework.',
    replays: [
      { id: '8-1', name: 'Michelle Clark', avatar: '' },
      { id: '8-2', name: 'James Lewis', avatar: '' },
    ]
  },
  {
    id: '9',
    name: 'John Johnson',
    avatar: '',
    review: 'Fast Track turned a regulatory headache into a same-day formality — we had fully approved KYC packs in eight hours, zero rework. The quality was exceptional.',
    replays: []
  },
  {
    id: '10',
    name: 'John Johnson',
    avatar: '',
    review: 'Fast Track turned a regulatory headache into a same-day formality — we had fully approved KYC packs in eight hours, zero rework. The quality was exceptional and the support team was incredibly responsive.',
    replays: [
      { id: '10-1', name: 'Jennifer Walker', avatar: '' },
      { id: '10-2', name: 'Kevin Hall', avatar: '' },
      { id: '10-3', name: 'Ashley Allen', avatar: '' },
    ]
  },
  {
    id: '11',
    name: 'John Johnson',
    avatar: '',
    review: 'Fast Track turned a regulatory headache into a same-day formality — we had fully approved KYC packs in eight hours, zero rework.',
    replays: [
      { id: '11-1', name: 'Ryan Young', avatar: '' },
    ]
  },
  {
    id: '12',
    name: 'John Johnson',
    avatar: '',
    review: 'Fast Track turned a regulatory headache into a same-day formality — we had fully approved KYC packs in eight hours, zero rework. The quality was exceptional.',
    replays: [
      { id: '12-1', name: 'Stephanie King', avatar: '' },
      { id: '12-2', name: 'Brandon Wright', avatar: '' },
    ]
  }
]

export const useReviews = () => {
  const reviews = ref<Review[]>(mockReviews)

  const loadMore = () => {
    // Здесь можно добавить логику загрузки дополнительных отзывов
    // Пока просто возвращаем функцию для совместимости
  }

  const hasMore = computed(() => {
    // Здесь можно добавить логику проверки наличия дополнительных отзывов
    return false
  })

  return {
    reviews,
    loadMore,
    hasMore
  }
}

