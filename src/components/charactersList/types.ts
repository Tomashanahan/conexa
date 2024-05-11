import { CharacterListLabel } from '@/context/charactersContext/types';
import { Character, Characters } from '@/models/characters';

export interface CharactersListProps {
    characters: Characters;
    loadingCharacters: boolean;
    characterListLabel: CharacterListLabel;
}
