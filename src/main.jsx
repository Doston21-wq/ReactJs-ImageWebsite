import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AppProvider} from './context'
import { QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClientProvider()
createRoot(document.getElementById('root')).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>  
<App />

    </QueryClientProvider>
  </AppProvider>
)
