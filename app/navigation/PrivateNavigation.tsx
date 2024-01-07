import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from '@/navigation/navigation.types'
import useAuth from '@/hooks/useAuth'
import { routes } from '@/navigation/routes'
import { Auth } from '@/components/screens'

interface PrivateNavigationProps {}

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigation: FC<PrivateNavigationProps> = ({}) => {
  const { user } = useAuth()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#1e1c2e',
        },
      }}
    >
      {!!user ? (
        routes.map((route) => <Stack.Screen key={route.name} {...route} />)
      ) : (
        <Stack.Screen name="Auth" component={Auth} />
      )}
    </Stack.Navigator>
  )
}

export default PrivateNavigation
