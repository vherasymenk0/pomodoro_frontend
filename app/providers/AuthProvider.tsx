import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { User } from '@/types/user.interface'
import * as Splash from 'expo-splash-screen'

export type TypesUserState = User | null

interface Context {
  user: TypesUserState
  setUser: Dispatch<SetStateAction<TypesUserState>>
}

export const AuthContext = createContext<Context>({} as Context)

Splash.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<TypesUserState>({} as TypesUserState)

  useEffect(() => {
    let isMounted = true

    const getUserFromStorage = async () => {
      if (isMounted) {
      }

      await Splash.hideAsync()
    }

    getUserFromStorage()

    return () => {
      isMounted = false
    }
  }, [])

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export default AuthProvider
