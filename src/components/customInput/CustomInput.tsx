import TextField from '@mui/material/TextField';
import { Controller, FieldValues, Path } from 'react-hook-form';

import { classes } from './classes';
import { CustomInputProps } from './types';

const CustomInput = <T extends FieldValues, J extends Path<T>>({ label, type = 'text', error, name, control, disabled = false }: CustomInputProps<T, J>) => (
    <Controller
        control={control}
        name={name}
        render={({ field }) => (
            <TextField
                error={error}
                disabled={disabled}
                className={error ? 'text-field-error' : disabled ? 'text-field-disabled' : ''}
                sx={classes.textField}
                id={name}
                label={label}
                variant="outlined"
                type={type}
                {...field}
            />
        )}
    />
);

export default CustomInput;
