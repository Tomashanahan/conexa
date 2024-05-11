import { Characters } from '@/models/characters';
import { Episode } from '@/models/episodes';
import { handleError, handleJSONResponse } from '@/utils/apiHandler';

import { FetchRickAndMortyHelper } from './types';

export const URL = 'https://rickandmortyapi.com/api/';

const fetchRickAndMortyHelper = async ({ url }: FetchRickAndMortyHelper) => await fetch(`${url}`).then(handleJSONResponse).catch(handleError);

const RickAndMortyAPI = {
    getAllCharacters: async (url: string): Promise<Characters> => await fetchRickAndMortyHelper({ url }),
    findCharacter: async (url: string): Promise<Characters> => await fetchRickAndMortyHelper({ url }),
    getAllEpisodes: async (url: string): Promise<Episode[]> => await fetchRickAndMortyHelper({ url }),
};

export default RickAndMortyAPI;
