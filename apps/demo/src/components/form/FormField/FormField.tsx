import { TextFieldProps } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useField } from 'formik'

export type FormFieldProps = Omit<
    TextFieldProps,
    'onChange' | 'onBlur' | 'value' | 'helperText' | 'error'
> & {
    name: string
}

const FormField = ({ name, ...rest }: FormFieldProps) => {
    const [field, meta] = useField(name)

    return (
        <TextField
            fullWidth
            {...rest}
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            name={field.name}
            helperText={meta.touched && meta.error}
            error={meta.touched && Boolean(meta.error)}
        />
    )
}

export default FormField
