import { Episode } from '@/models/episodes';
import { PropsWithChildren } from 'react';

export type EpisodesListLabel = 'episodesFromCharacter1List' | 'episodesFromCharacter2List';

export interface EpisodesContextProps {
    episodesFromCharacter1List: Episode[];
    episodesFromCharacter2List: Episode[];
    commonEpisodesList: Episode[];
    findEpisodeFromPage: (listOfIds: string, list: EpisodesListLabel) => Promise<void>;
    findCharacterEpisodes: (episodes: string[]) => string;
}
export interface EpisodesProps extends PropsWithChildren {}
