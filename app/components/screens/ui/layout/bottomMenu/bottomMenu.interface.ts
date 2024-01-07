import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { Feather } from '@expo/vector-icons'

export interface BottomMenuProps {
  nav: TypeNav
  currentRoute?: string
}

export type TypeNav = (name: keyof TypeRootStackParamList) => void

export type BottomMenuItemType = {
  path: keyof TypeRootStackParamList
  iconName: keyof typeof Feather.glyphMap
}
