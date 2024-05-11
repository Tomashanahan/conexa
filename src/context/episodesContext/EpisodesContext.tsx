'use client';

import { Episode } from '@/models/episodes';
import RickAndMortyAPI from '@/services/rickAndMorty/rickAndMorty';
import { createContext, useContext, useEffect, useState } from 'react';

import { useCharacters } from '../charactersContext/CharactersContext';
import { EpisodesContextProps, EpisodesListLabel, EpisodesProps } from './types';

const EpisodesContext = createContext({} as EpisodesContextProps);

export const EpisodesProvider = ({ children }: EpisodesProps) => {
    const { character1List, character2List } = useCharacters();

    const [episodesFromCharacter1List, setEpisodesFromCharacter1List] = useState<Episode[]>([]);
    const [episodesFromCharacter2List, setEpisodesFromCharacter2List] = useState<Episode[]>([]);
    const [commonEpisodesList, setCommonEpisodesList] = useState<Episode[]>([]);

    const findEpisodeFromPage = async (listOfIds: string, list: EpisodesListLabel) => {
        let episodes = await RickAndMortyAPI.getAllEpisodes(`https://rickandmortyapi.com/api/episode/${listOfIds}`);

        if (!Array.isArray(episodes)) episodes = [episodes];

        if (list === 'episodesFromCharacter1List') {
            setEpisodesFromCharacter1List(episodes);
        } else {
            setEpisodesFromCharacter2List(episodes);
        }
    };

    const findCharacterEpisodes = (episodes: string[]) =>
        episodes.reduce((acc, url) => {
            const episodeId = url.split('/').at(-1);
            return (acc += acc === '' ? episodeId : `,${url.split('/').at(-1)}`);
        }, '');

    useEffect(() => {
        if (character1List.characterSelected) {
            const episodes = findCharacterEpisodes(character1List.characterSelected.episode);
            findEpisodeFromPage(episodes, 'episodesFromCharacter1List');
        }

        if (character2List.characterSelected) {
            const episodes = findCharacterEpisodes(character2List.characterSelected.episode);
            findEpisodeFromPage(episodes, 'episodesFromCharacter2List');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [character1List.characterSelected, character2List.characterSelected]);

    useEffect(() => {
        if (episodesFromCharacter1List?.length && episodesFromCharacter2List?.length) {
            const commonEpisodes = episodesFromCharacter1List.filter((episode) => episodesFromCharacter2List.some((episode2) => episode.id === episode2.id));
            setCommonEpisodesList(commonEpisodes);
        }
    }, [episodesFromCharacter1List, episodesFromCharacter2List]);

    return (
        <EpisodesContext.Provider
            value={{
                episodesFromCharacter1List,
                episodesFromCharacter2List,
                commonEpisodesList,
                findEpisodeFromPage,
                findCharacterEpisodes,
            }}
        >
            {children}
        </EpisodesContext.Provider>
    );
};

export const useEpisodes = () => {
    const context = useContext(EpisodesContext);

    if (!context) {
        throw new Error('useEpisodes must be used within a EpisodesProvider');
    }
    return context;
};
