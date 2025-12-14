import { ref } from 'vue'
import type { Course } from '@entities/course'

// Мок-данные для курсов
const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    description: 'This specialization is designed for beginners who want to build software using AI—no coding experience required. You\'ll learn the fundamentals of vibe coding and how to use tools like GitHub Copilot, Cursor, and ChatGPT to turn your ideas into real, working apps. Whether you\'re a marketer, designer, accountant, or creative professional, this course will teach you how to leverage AI to create software solutions.',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    price: '$ Price'
  },
  {
    id: '2',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    description: 'This specialization is designed for beginners who want to build software using AI—no coding experience required. You\'ll learn the fundamentals of vibe coding and how to use tools like GitHub Copilot, Cursor, and ChatGPT to turn your ideas into real, working apps. Whether you\'re a marketer, designer, accountant, or creative professional, this course will teach you how to leverage AI to create software solutions.',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    price: '$ Price'
  },
  {
    id: '3',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
    description: 'This specialization is designed for beginners who want to build software using AI—no coding experience required. You\'ll learn the fundamentals of vibe coding and how to use tools like GitHub Copilot, Cursor, and ChatGPT to turn your ideas into real, working apps. Whether you\'re a marketer, designer, accountant, or creative professional, this course will teach you how to leverage AI to create software solutions.',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    price: '$ Price'
  }
]

export const useCourses = () => {
  const courses = ref<Course[]>(mockCourses)

  return {
    courses
  }
}

