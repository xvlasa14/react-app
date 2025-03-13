import React from 'react'

import { routerPaths } from '@/config/router-paths'

import Layout from './components/Layout/Layout'

const HomeView = React.lazy(() => import('./HomeView/HomeView'))

export const commonRoutes = [
    {
        element: <Layout />,
        children: [
            {
                path: routerPaths.index,
                element: <HomeView />,
            },
        ],
    },
]
