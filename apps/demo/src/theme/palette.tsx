import { alpha } from '@mui/material'
import type { PaletteOptions } from '@mui/material/styles/createPalette'

export const palette: PaletteOptions = {
    primary: {
        light: '#e9573d',
        main: '#C21B17',
        dark: '#8e1230',
    },
    secondary: {
        light: '#f09273',
        main: '#D16944',
        dark: '#b15c49',
    },
    success: {
        main: '#55AB67',
    },
    warning: {
        main: '#FFCC00',
    },
    info: {
        main: '#437EB5',
    },
    error: {
        main: '#E9573D',
    },
    divider: alpha('#000', 0.12),
    text: {
        primary: '#20252B',
        secondary: alpha('#20252B', 0.7),
        disabled: alpha('#20252B', 0.5),
    },
    background: {
        default: '#F5F5F5',
    },
} as PaletteOptions
