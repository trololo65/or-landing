export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps {
  modelValue: string
  options: SelectOption[]
  placeholder?: string
  disabled?: boolean
}

