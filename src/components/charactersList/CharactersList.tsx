import { globalClasses } from '@/theme/global-classes';
import { Grid, Skeleton } from '@mui/material';

import Character from '../character/Character';
import { CharactersListProps } from './types';

const CharactersList = ({ characters, loadingCharacters, characterListLabel }: CharactersListProps) =>
    loadingCharacters ? (
        <Grid mt={-5} height={400} overflow="scroll" container rowSpacing={0} columnSpacing={1} sx={globalClasses.hideScrollBar}>
            {new Array(6).fill(0)?.map((_, i) => (
                <Grid item xs={6} key={i} maxHeight={180}>
                    <Skeleton data-testid="loading-skeleton" variant="text" height={180} />
                </Grid>
            ))}
        </Grid>
    ) : (
        <Grid height={400} overflow="scroll" container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={[globalClasses.hideScrollBar, { overscrollBehavior: 'contain' }]}>
            {characters?.results?.map((character) => (
                <Grid item xs={12} md={12} lg={6} key={character.id}>
                    <Character characterListLabel={characterListLabel} character={character} />
                </Grid>
            ))}
        </Grid>
    );

export default CharactersList;
