import { Theme } from '@mui/material/styles'
import type { Components } from '@mui/material/styles/components'
import type {} from '@mui/x-data-grid/themeAugmentation'

import LinkWrapper from '@/components/other/LinkWrapper/LinkWrapper'

export const components: Components<Theme> = {
    MuiCssBaseline: {
        styleOverrides: ({ palette }) => ({
            body: {
                background: palette.background.default,
            },
        }),
    },
    MuiLink: {
        defaultProps: {
            component: LinkWrapper,
        },
        styleOverrides: {
            root: () => ({
                textDecoration: 'none',
            }),
        },
    },
}
