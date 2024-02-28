import { StatusBar } from 'expo-status-bar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from '@/navigation/Navigation'
// Fix classnames for web
import { NativeWindStyleSheet } from 'nativewind'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/store'

NativeWindStyleSheet.setOutput({
  default: 'native',
})

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar style="light" />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}
