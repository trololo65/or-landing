export enum ChipVariant {
  FILLED = 'filled',
  OUTLINED = 'outlined',
  SOFT = 'soft',
  GHOST = 'ghost',
}

export enum ChipSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export enum ChipColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
  DARK = 'dark',
}

export interface ChipProps {
  variant?: ChipVariant
  size?: ChipSize
  color?: ChipColor
  disabled?: boolean
  closable?: boolean
}

