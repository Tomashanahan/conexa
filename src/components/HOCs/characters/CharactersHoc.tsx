import Search from '@/components/search/Search';
import { Box, Stack, Typography } from '@mui/material';

import { classes } from './classes';
import { CharactersHocProps } from './types';

const CharactersHoc = ({ children, title, characterListLabel, ...props }: CharactersHocProps) => (
    <Stack {...props}>
        <Typography sx={classes.title}>{title}</Typography>
        <Search characterListLabel={characterListLabel} />
        <Box mt={3}>{children}</Box>
    </Stack>
);

export default CharactersHoc;
