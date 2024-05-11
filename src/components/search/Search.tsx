import { useCharacters } from '@/context/charactersContext/CharactersContext';
import useReactHookForm from '@/hooks/useReactHookForm/useReactHookForm';
import SearchIcon from '@/icons/SearchIcon';
import { searchSchema } from '@/schemas/searchSchema';
import LoadingButton from '@mui/lab/LoadingButton';
import { useCallback, useEffect, useState } from 'react';

import FlexBox from '../UI/FlexBox';
import CustomInput from '../customInput/CustomInput';
import { classes } from './classes';
import { searchInitialValues } from './constants';
import { SearchProps } from './types';

const Search = ({ characterListLabel }: SearchProps) => {
    const { findCharacterFromPage } = useCharacters();
    const [isSearching, setIsSearching] = useState(false);
    const { formState, control, handleSubmit, watch } = useReactHookForm({
        defaultValues: searchInitialValues,
        schema: searchSchema,
    });
    const { errors, isLoading } = formState;
    const search = watch('search');

    const debounce = useCallback((func: Function, delay: number = 500) => {
        let timeoutId: ReturnType<typeof setTimeout>;
        return function (...args: any[]) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const findCharacterFromPageDebounced = useCallback(debounce(findCharacterFromPage), []);

    useEffect(() => {
        if (search) {
            setIsSearching(true);
            findCharacterFromPageDebounced(search, characterListLabel);
            setIsSearching(false);
        } else {
            findCharacterFromPage('', characterListLabel);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const onSubmit = async (values: typeof searchInitialValues) => {
        findCharacterFromPage(values.search, characterListLabel);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FlexBox sx={classes.container}>
                <CustomInput name="search" control={control} label="Rick Sanchez" error={!!errors?.search} />
                <LoadingButton type="submit" sx={classes.loadingButton} loading={isSearching || isLoading}>
                    <SearchIcon color="action" />
                </LoadingButton>
            </FlexBox>
        </form>
    );
};

export default Search;
