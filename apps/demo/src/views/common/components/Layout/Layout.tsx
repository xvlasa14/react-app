import Box from '@mui/material/Box'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <Box p={3}>
            <Suspense fallback={<>Loading...</>}>
                <Outlet />
            </Suspense>
        </Box>
    )
}

export default Layout
