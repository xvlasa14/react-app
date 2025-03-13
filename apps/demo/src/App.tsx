import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { routerPaths } from '@/config/router-paths'
import { commonRoutes } from '@/views/common/common-routes'

const router = createBrowserRouter([
    ...commonRoutes,
    {
        path: '*',
        element: <Navigate to={routerPaths.index} />,
    },
])

const App = () => {
    React.useEffect(() => {
        const preloadErrorListener = () => {
            window.location.reload()
        }

        window.addEventListener('vite:preloadError', preloadErrorListener)

        return () => {
            window.removeEventListener(
                'vite:preloadError',
                preloadErrorListener,
            )
        }
    }, [])

    return <RouterProvider router={router} />
}

export default App
