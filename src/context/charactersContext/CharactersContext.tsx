'use client';

import { Character } from '@/models/characters';
import RickAndMortyAPI from '@/services/rickAndMorty/rickAndMorty';
import { createContext, useContext, useEffect, useState } from 'react';

import { characterDefaultState } from './constants';
import { CharacterListLabel, CharactersContextProps, CharactersProps, CharactersState } from './types';

export const CharactersContext = createContext({} as CharactersContextProps);

export const CharactersProvider = ({ children }: CharactersProps) => {
    const [character1List, setCharacter1List] = useState<CharactersState>(characterDefaultState);
    const [character2List, setCharacters2List] = useState<CharactersState>(characterDefaultState);
    const [loadingCharacters, setLoadingCharacters] = useState(true);

    useEffect(() => {
        (async () => {
            const characters = await RickAndMortyAPI.getAllCharacters('https://rickandmortyapi.com/api/character');

            setCharacter1List((prev) => ({ ...prev, characters }));
            setCharacters2List((prev) => ({ ...prev, characters }));
            setLoadingCharacters(false);
        })();
    }, []);

    const getCharactersFromPage = async (page: number, list: CharacterListLabel) => {
        const characterNameToSearch = list === 'character1List' ? character1List.search : character2List.search;
        const characters = await RickAndMortyAPI.getAllCharacters(`https://rickandmortyapi.com/api/character?page=${page}&name=${characterNameToSearch}`);

        list === 'character1List' ? setCharacter1List((prev) => ({ ...prev, characters })) : setCharacters2List((prev) => ({ ...prev, characters }));
    };

    const findCharacterFromPage = async (name: string, list: CharacterListLabel) => {
        const character = await RickAndMortyAPI.findCharacter(`https://rickandmortyapi.com/api/character?name=${name}`);

        if (list === 'character1List') {
            setCharacter1List((prev) => ({ ...prev, characters: character, search: name }));
        } else {
            setCharacters2List((prev) => ({ ...prev, characters: character, search: name }));
        }
    };

    const handleSelectCharacter = (character: Character, list: CharacterListLabel) => {
        list === 'character1List'
            ? setCharacter1List((prev): CharactersState => ({ ...prev, characterSelected: character }))
            : setCharacters2List((prev): CharactersState => ({ ...prev, characterSelected: character }));
    };

    return (
        <CharactersContext.Provider
            value={{
                character1List,
                character2List,
                getCharactersFromPage,
                loadingCharacters,
                findCharacterFromPage,
                handleSelectCharacter,
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
};

export const useCharacters = () => {
    const context = useContext(CharactersContext);
    if (!context) {
        throw new Error('useCharacters must be used within a CharactersProvider');
    }
    return context;
};
