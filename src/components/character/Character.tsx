import FlexBox from '@/components/UI/FlexBox';
import { useCharacters } from '@/context/charactersContext/CharactersContext';
import type { Character } from '@/models/characters';
import { colors } from '@/theme/theme-colors';
import { Chip } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { classes } from './classes';
import { speciesColors, statusColors } from './constants';
import { CharactersProps } from './types';

const Character = ({ character, characterListLabel }: CharactersProps) => {
    const { handleSelectCharacter, character1List, character2List } = useCharacters();
    const list = characterListLabel === 'character1List' ? character1List : character2List;
    const isSelected = list?.characterSelected?.id === character.id;
    const selectedClass = isSelected ? { border: `3px solid ${colors.blue[600]}` } : {};

    return (
        <FlexBox sx={[classes.cardContainer, selectedClass]} onClick={() => handleSelectCharacter(character, characterListLabel)} data-testid="character">
            <Image fetchPriority="high" src={character.image} alt={character.name} width={100} height={100} />
            <Box>
                <Typography sx={classes.characterName}>{character.name}</Typography>
                <FlexBox sx={classes.chipsContainer}>
                    <Chip label={character.species} sx={[speciesColors[character.species], classes.chip]} />
                    <Chip label={character.status} sx={[statusColors[character.status], classes.chip]} />
                </FlexBox>
            </Box>
        </FlexBox>
    );
};

export default Character;
