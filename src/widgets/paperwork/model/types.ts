export interface Tab {
  id: string
  labelKey: string
}

export interface AccordionItem {
  id: string
  labelKey: string
  descriptionKey: string
}

export interface AccordionItems {
  [key: string]: AccordionItem[]
}

