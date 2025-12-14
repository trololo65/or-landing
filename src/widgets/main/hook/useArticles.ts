import { ref } from 'vue'
import type { Article } from '@entities/article'

const mockArticles: Article[] = [
  {
    id: 'a1',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    date: 'May 12, 2025'
  },
  {
    id: 'a2',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    date: 'May 12, 2025'
  },
  {
    id: 'a3',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    date: 'May 12, 2025'
  },
  {
    id: 'a4',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    date: 'May 12, 2025'
  },
  {
    id: 'a5',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    date: 'May 12, 2025'
  },
  {
    id: 'a6',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    date: 'May 12, 2025'
  },
  {
    id: 'a7',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    date: 'May 12, 2025'
  },
]

export const useArticles = () => {
  const articles = ref<Article[]>(mockArticles)

  return {
    articles
  }
}


