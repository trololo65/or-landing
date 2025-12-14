import { cva, type VariantProps } from 'class-variance-authority'
import { ChipVariant, ChipSize, ChipColor } from './types'

const variantColorMap: Record<ChipVariant, Record<ChipColor, string>> = {
  [ChipVariant.FILLED]: {
    [ChipColor.PRIMARY]: 'bg-primary-500 text-white hover:bg-primary-600',
    [ChipColor.SECONDARY]: 'bg-gray-500 text-white hover:bg-gray-600',
    [ChipColor.SUCCESS]: 'bg-green-500 text-white hover:bg-green-600',
    [ChipColor.WARNING]: 'bg-yellow-500 text-white hover:bg-yellow-600',
    [ChipColor.ERROR]: 'bg-red-500 text-white hover:bg-red-600',
    [ChipColor.INFO]: 'bg-blue-500 text-white hover:bg-blue-600',
    [ChipColor.DARK]: 'bg-gray-900 text-white hover:bg-gray-800',
  },
  [ChipVariant.OUTLINED]: {
    [ChipColor.PRIMARY]: 'border border-primary-500 text-primary-500 hover:bg-primary-500/10 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400/10',
    [ChipColor.SECONDARY]: 'border border-gray-500 text-gray-500 hover:bg-gray-500/10 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400/10',
    [ChipColor.SUCCESS]: 'border border-green-500 text-green-500 hover:bg-green-500/10 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400/10',
    [ChipColor.WARNING]: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400/10',
    [ChipColor.ERROR]: 'border border-red-500 text-red-500 hover:bg-red-500/10 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-400/10',
    [ChipColor.INFO]: 'border border-blue-500 text-blue-500 hover:bg-blue-500/10 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400/10',
    [ChipColor.DARK]: 'border border-gray-900 text-gray-900 hover:bg-gray-900/10 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400/10',
  },
  [ChipVariant.SOFT]: {
    [ChipColor.PRIMARY]: 'bg-primary-500/20 text-primary-700 hover:bg-primary-500/30 dark:bg-primary-400/20 dark:text-primary-300 dark:hover:bg-primary-400/30',
    [ChipColor.SECONDARY]: 'bg-gray-500/20 text-gray-700 hover:bg-gray-500/30 dark:bg-gray-400/20 dark:text-gray-300 dark:hover:bg-gray-400/30',
    [ChipColor.SUCCESS]: 'bg-green-500/20 text-green-700 hover:bg-green-500/30 dark:bg-green-400/20 dark:text-green-300 dark:hover:bg-green-400/30',
    [ChipColor.WARNING]: 'bg-yellow-500/20 text-yellow-700 hover:bg-yellow-500/30 dark:bg-yellow-400/20 dark:text-yellow-300 dark:hover:bg-yellow-400/30',
    [ChipColor.ERROR]: 'bg-red-500/20 text-red-700 hover:bg-red-500/30 dark:bg-red-400/20 dark:text-red-300 dark:hover:bg-red-400/30',
    [ChipColor.INFO]: 'bg-blue-500/20 text-blue-700 hover:bg-blue-500/30 dark:bg-blue-400/20 dark:text-blue-300 dark:hover:bg-blue-400/30',
    [ChipColor.DARK]: 'bg-gray-900/20 text-gray-700 hover:bg-gray-900/30 dark:bg-gray-400/20 dark:text-gray-300 dark:hover:bg-gray-400/30',
  },
  [ChipVariant.GHOST]: {
    [ChipColor.PRIMARY]: 'text-primary-500 hover:bg-primary-500/10 dark:text-primary-400 dark:hover:bg-primary-400/10',
    [ChipColor.SECONDARY]: 'text-gray-500 hover:bg-gray-500/10 dark:text-gray-400 dark:hover:bg-gray-400/10',
    [ChipColor.SUCCESS]: 'text-green-500 hover:bg-green-500/10 dark:text-green-400 dark:hover:bg-green-400/10',
    [ChipColor.WARNING]: 'text-yellow-500 hover:bg-yellow-500/10 dark:text-yellow-400 dark:hover:bg-yellow-400/10',
    [ChipColor.ERROR]: 'text-red-500 hover:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-400/10',
    [ChipColor.INFO]: 'text-blue-500 hover:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-400/10',
    [ChipColor.DARK]: 'text-gray-900 hover:bg-gray-900/10 dark:text-gray-400 dark:hover:bg-gray-400/10',
  },
}

export const chipVariants = cva(
  'inline-flex items-center gap-1.5 font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        [ChipVariant.FILLED]: '',
        [ChipVariant.OUTLINED]: '',
        [ChipVariant.SOFT]: '',
        [ChipVariant.GHOST]: '',
      },
      color: {
        [ChipColor.PRIMARY]: '',
        [ChipColor.SECONDARY]: '',
        [ChipColor.SUCCESS]: '',
        [ChipColor.WARNING]: '',
        [ChipColor.ERROR]: '',
        [ChipColor.INFO]: '',
        [ChipColor.DARK]: '',
      },
      size: {
        [ChipSize.SM]: 'px-2 py-1 text-xs',
        [ChipSize.MD]: 'px-3 py-1.5 text-sm',
        [ChipSize.LG]: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: ChipVariant.FILLED,
      color: ChipColor.PRIMARY,
      size: ChipSize.MD,
    },
  }
)

export const getChipVariantColorClasses = (variant: ChipVariant, color: ChipColor): string => {
  return variantColorMap[variant]?.[color] || ''
}

export const chipCloseButtonVariants = cva(
  'ml-1 -mr-1 rounded-full p-0.5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        [ChipVariant.FILLED]: 'hover:bg-black/20 focus:ring-black/30',
        [ChipVariant.OUTLINED]: 'hover:bg-current/10 focus:ring-current/30',
        [ChipVariant.SOFT]: 'hover:bg-current/20 focus:ring-current/30',
        [ChipVariant.GHOST]: 'hover:bg-current/20 focus:ring-current/30',
      },
    },
    defaultVariants: {
      variant: ChipVariant.FILLED,
    },
  }
)

export type ChipVariants = VariantProps<typeof chipVariants>
