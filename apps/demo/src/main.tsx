import '@/config/dayjs'

import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ReactDOM from 'react-dom/client'

import Toaster from '@/components/other/Toaster/Toaster'
import { queryClient } from '@/config/query-client/query-client'
import { theme } from '@/theme/theme'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <Toaster />
            <CssBaseline />
            <App />
        </ThemeProvider>

        <ReactQueryDevtools />
    </QueryClientProvider>,
)
