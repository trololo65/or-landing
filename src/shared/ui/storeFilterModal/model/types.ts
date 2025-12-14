export interface FilterOption {
  id: string
  label: string
}

export interface FilterQuestion {
  id: string
  options: FilterOption[]
}

export interface StoreFilterModalProps {
  modelValue: boolean
  filterQuestions: FilterQuestion[]
  defaultSelectedOptions?: Record<number, string>
}

