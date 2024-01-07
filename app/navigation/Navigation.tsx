import React, { FC, useEffect, useState } from 'react'
import useAuth from '@/hooks/useAuth'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { BottomMenu } from '@/components/screens/ui/layout/bottomMenu'
import PrivateNavigation from '@/navigation/PrivateNavigation'

interface Props {}

const Navigation: FC<Props> = ({}) => {
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined)
  const navRef = useNavigationContainerRef()
  const { user } = useAuth()
  const showMenu = !!user && !!currentRoute

  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name)

    const listener = navRef.addListener('state', () =>
      setCurrentRoute(navRef.getCurrentRoute()?.name),
    )

    return () => {
      navRef.removeListener('state', listener)
    }
  }, [])

  return (
    <>
      <NavigationContainer ref={navRef}>
        <PrivateNavigation />
      </NavigationContainer>
      {showMenu && <BottomMenu currentRoute={currentRoute} nav={navRef.navigate} />}
    </>
  )
}

export default Navigation
