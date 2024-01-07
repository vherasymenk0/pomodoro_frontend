import { Route } from './navigation.types'
import { Home, Profile, Settings, Statistics } from '@/components/screens'

export const routes: Route[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Settings',
    component: Settings,
  },
  {
    name: 'Profile',
    component: Profile,
  },
  {
    name: 'Statistics',
    component: Statistics,
  },
]
