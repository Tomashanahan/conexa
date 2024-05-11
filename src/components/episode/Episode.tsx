import { Tooltip, Typography } from '@mui/material';

import FlexBox from '../UI/FlexBox';
import { classes } from './classes';
import { EpisodeProps } from './types';

const Episode = ({ episode }: EpisodeProps) => (
    <FlexBox sx={classes.episodeContainer} data-testid="episode">
        <FlexBox sx={{ alignItems: 'center' }}>
            <Typography sx={classes.episode}>{episode.episode}</Typography>
            {episode.name.length > 28 ? (
                <Tooltip title={episode.name} placement="top">
                    <Typography sx={classes.episodeName}>{episode.name}</Typography>
                </Tooltip>
            ) : (
                <Typography sx={classes.episodeName}>{episode.name}</Typography>
            )}
        </FlexBox>
        <Typography sx={classes.episodeDate}>{episode.air_date}</Typography>
    </FlexBox>
);

export default Episode;
