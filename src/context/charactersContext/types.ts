import { Character, Characters } from '@/models/characters';
import { PropsWithChildren } from 'react';

export type CharacterListLabel = 'character1List' | 'character2List';

export interface CharactersContextProps {
    character1List: CharactersState;
    character2List: CharactersState;
    loadingCharacters: boolean;
    getCharactersFromPage: (page: number, list: CharacterListLabel) => Promise<void>;
    findCharacterFromPage: (name: string, list: CharacterListLabel) => Promise<void>;
    handleSelectCharacter: (character: Character, list: CharacterListLabel) => void;
}
export interface CharactersProps extends PropsWithChildren {}

export interface CharactersState {
    characters: Characters;
    search: string;
    characterSelected: Character | null;
}
