import type * as React from 'react'
import type {CustomStyles} from '@/styles'

// List2 differs from list in that on desktop it uses react-window.
// Don't use List2 if you need a list with dynamic item sizes

export type VariableItemHeight<Item> = {
  getItemLayout: (
    index: number,
    item?: Item
  ) => {
    index: number
    length: number
    offset: number
  }
  type: 'variable'
}

export type FixedHeight = {
  height: number
  type: 'fixed'
}

export type FixedListItem2Auto = {
  sizeType: 'Small' | 'Large'
  type: 'fixedListItem2Auto'
}

// Having flex in the list messes with creating the right size inner container
// for scroll
export type Props<Item> = {
  forceLayout?: number // desktop only; causes resetAfterIndex(0, true) whe nit changes.
  style?: CustomStyles<'flex' | 'flexDirection', {}>
  indexAsKey?: boolean
  keyProperty?: string // if passed uses item[keyProperty] for the item keys,
  items: ReadonlyArray<Item>
  renderItem: (index: number, item: Item) => React.ReactElement | null
  itemHeight: VariableItemHeight<Item> | FixedHeight | FixedListItem2Auto
  estimatedItemHeight?: number
  selectedIndex?: number // TODO,
  bounces?: boolean // mobile only,
  keyboardShouldPersistTaps?: 'never' | 'always' | 'handled' // mobile only,
  windowSize?: number // Mobile only, has a non-RN default,
  onEndReached?: () => void
  reAnimated?: boolean // mobile only, make list animated
}

export declare function List2<Item>(p: Props<Item>): React.ReactNode
export default List2
