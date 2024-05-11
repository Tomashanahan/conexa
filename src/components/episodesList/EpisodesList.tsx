import { globalClasses } from '@/theme/global-classes';
import { Stack } from '@mui/material';

import Episode from '../episode/Episode';
import { EpisodesListProps } from './types';

const EpisodesList = ({ episodes }: EpisodesListProps) => (
    <Stack gap={2} maxHeight={500} overflow="scroll" sx={[globalClasses.hideScrollBar, { overscrollBehavior: 'contain' }]}>
        {episodes?.map((episode) => <Episode key={episode.id} episode={episode} />)}
    </Stack>
);

export default EpisodesList;
