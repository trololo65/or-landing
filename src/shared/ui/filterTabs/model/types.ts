export interface FilterTab {
  id: string
  label: string
}

export interface FilterTabsProps {
  tabs: FilterTab[]
  selectedTabId: string
  scrollable?: boolean
}

