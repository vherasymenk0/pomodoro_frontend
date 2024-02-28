import { StatusBar } from 'expo-status-bar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from '@/providers/AuthProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from '@/navigation/Navigation'
// Fix classnames for web
import { NativeWindStyleSheet } from 'nativewind'
import { Provider } from 'react-redux'
import { persistor, store } from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'

NativeWindStyleSheet.setOutput({
  default: 'native',
})

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AuthProvider>
            <SafeAreaProvider>
              <Navigation />
              <StatusBar style="light" />
            </SafeAreaProvider>
          </AuthProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}
