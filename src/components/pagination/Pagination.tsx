import { useCharacters } from '@/context/charactersContext/CharactersContext';
import { Pagination as MuiPagination } from '@mui/material';

import FlexBox from '../UI/FlexBox';
import { classes } from './classes';
import { PaginationProps } from './types';

const Pagination = ({ count, characterListLabel }: PaginationProps) => {
    const { getCharactersFromPage } = useCharacters();
    return (
        <FlexBox justifyContent="center" mt={3}>
            <MuiPagination
                onChange={(_, page) => getCharactersFromPage(page, characterListLabel)}
                count={count}
                variant="outlined"
                shape="rounded"
                color="primary"
                sx={classes.pagination}
                siblingCount={0}
            />
        </FlexBox>
    );
};

export default Pagination;
