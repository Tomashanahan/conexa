import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';

import { Props } from './types';

const useReactHookForm = <T extends FieldValues>({ defaultValues, schema }: Props) => {
    const reactHookForm = useForm<T>({
        defaultValues,
        resolver: yupResolver(schema),
    });

    return { ...reactHookForm };
};

export default useReactHookForm;
