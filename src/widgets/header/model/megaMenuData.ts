import type { MegaMenuContent } from './types'

export const megaMenuData: Record<string, MegaMenuContent> = {
  solutions: {
    sections: [
      {
        title: 'megamenu.solutions.scans.title',
        description: 'megamenu.solutions.scans.description',
        href: '/solutions/scans-and-lists'
      },
      {
        title: 'megamenu.solutions.kyc.title',
        description: 'megamenu.solutions.kyc.description',
        href: '/solutions/kyc'
      },
      {
        title: 'megamenu.solutions.paperwork.title',
        description: 'megamenu.solutions.paperwork.description',
        href: '/solutions/paper-work'
      }
    ]
  },
  articles: {
    sections: [
      {
        title: 'megamenu.articles.types.title',
        items: [
          {
            label: 'megamenu.articles.types.all',
            href: '/articles',
            icon: '↗'
          },
          {
            label: 'megamenu.articles.types.tutorials',
            href: '/articles/tutorials',
            icon: '↗'
          },
          {
            label: 'megamenu.articles.types.news',
            href: '/articles/news',
            icon: '↗'
          },
          {
            label: 'megamenu.articles.types.guides',
            href: '/articles/guides',
            icon: '↗'
          }
        ]
      },
      {
        title: 'megamenu.articles.categories.title',
        items: [
          {
            label: 'megamenu.articles.categories.tech',
            href: '/articles/category/tech',
            icon: '💻'
          },
          {
            label: 'megamenu.articles.categories.business',
            href: '/articles/category/business',
            icon: '📊'
          },
          {
            label: 'megamenu.articles.categories.dev',
            href: '/articles/category/dev',
            icon: '⚡'
          },
          {
            label: 'megamenu.articles.categories.design',
            href: '/articles/category/design',
            icon: '🎨'
          }
        ]
      }
    ],
    featured: {
      title: 'megamenu.articles.featured.title',
      description: 'megamenu.articles.featured.description'
    }
  },
  products: {
    sections: [
      {
        title: 'megamenu.products.courses.title',
        items: [
          {
            label: 'megamenu.products.courses.viewAll',
            href: '/products',
            icon: '📚'
          }
        ]
      },
      {
        title: 'megamenu.products.categories.title',
        items: [
          {
            label: 'megamenu.products.categories.webDev',
            href: '/products/web-dev',
            icon: '🌐'
          },
          {
            label: 'megamenu.products.categories.mobile',
            href: '/products/mobile',
            icon: '📱'
          },
          {
            label: 'megamenu.products.categories.data',
            href: '/products/data',
            icon: '📊'
          },
          {
            label: 'megamenu.products.categories.ai',
            href: '/products/ai',
            icon: '🤖'
          },
          {
            label: 'megamenu.products.categories.cloud',
            href: '/products/cloud',
            icon: '☁️'
          },
          {
            label: 'megamenu.products.categories.security',
            href: '/products/security',
            icon: '🔐'
          }
        ]
      }
    ],
    featured: {
      title: 'megamenu.products.featured.title',
      description: 'megamenu.products.featured.description'
    }
  },
  coaching: {
    sections: [
      {
        title: 'megamenu.coaching.services.title',
        items: [
          {
            label: 'megamenu.coaching.services.oneOnOne',
            href: '/coaching/one-on-one',
            icon: '👤'
          },
          {
            label: 'megamenu.coaching.services.group',
            href: '/coaching/group',
            icon: '👥'
          },
          {
            label: 'megamenu.coaching.services.corporate',
            href: '/coaching/corporate',
            icon: '🏢'
          }
        ]
      },
      {
        title: 'megamenu.coaching.expertise.title',
        items: [
          {
            label: 'megamenu.coaching.expertise.career',
            href: '/coaching/career',
            icon: '📈'
          },
          {
            label: 'megamenu.coaching.expertise.technical',
            href: '/coaching/technical',
            icon: '⚙️'
          },
          {
            label: 'megamenu.coaching.expertise.leadership',
            href: '/coaching/leadership',
            icon: '👑'
          }
        ]
      }
    ],
    featured: {
      title: 'megamenu.coaching.featured.title',
      description: 'megamenu.coaching.featured.description'
    }
  }
}

