import type { FilterTab } from '@shared/ui/filterTabs'

export interface FilterModalProps {
  modelValue: boolean
  tabs: FilterTab[]
  selectedTabId: string
}

