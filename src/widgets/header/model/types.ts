export interface NavItem {
  key: string
  labelKey: string
  href: string
  external?: boolean
  hasMegaMenu?: boolean
}

export interface MegaMenuSection {
  title: string
  description?: string
  href?: string
  items?: {
    label: string
    href: string
    icon?: string
  }[]
}

export interface MegaMenuContent {
  sections: MegaMenuSection[]
  featured?: {
    title: string
    description: string
    image?: string
  }
}

export interface HeaderState {
  isScrolled: boolean
  isMobileMenuOpen: boolean
  isHeaderHovered: boolean
  activeMegaMenu: string | null
}

