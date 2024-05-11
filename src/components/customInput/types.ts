import { Control, ControllerRenderProps, FieldValues, Path, UseFormTrigger } from 'react-hook-form';

export interface CustomInputProps<T extends FieldValues, J extends Path<T>> {
    label: string;
    type?: React.HTMLInputTypeAttribute;
    error: boolean;
    control: Control<T>;
    name: J;
    disabled?: boolean;
}
