// Базовая модель отзыва без replies
export interface ReviewBase {
  avatar?: string
  name: string
  id: string
  review: string
}

// Полная модель отзыва с replies
export interface Review extends ReviewBase {
  replays: ReviewBase[]
}

