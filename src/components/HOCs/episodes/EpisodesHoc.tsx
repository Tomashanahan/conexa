import { Box, Stack, Typography } from '@mui/material';

import { classes } from './classes';
import { EpisodesHocProps } from './types';

const EpisodesHoc = ({ children, title, ...props }: EpisodesHocProps) => (
    <Stack {...props}>
        <Typography sx={classes.title}>{title}</Typography>
        {children}
    </Stack>
);

export default EpisodesHoc;
