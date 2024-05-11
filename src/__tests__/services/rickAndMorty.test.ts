import RickAndMortyAPI from '@/services/rickAndMorty/rickAndMorty';
import fetchMock from 'jest-fetch-mock';

describe('RickAndMortyAPI', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('Should fetch all characters', async () => {
        const mockCharacters = { results: [{ id: 1, name: 'Rick Sanchez' }] };
        const getAllCharactersURL = `${URL}character`;
        fetchMock.mockResponseOnce(JSON.stringify(mockCharacters));

        const result = await RickAndMortyAPI.getAllCharacters(getAllCharactersURL);

        expect(fetchMock).toHaveBeenCalledWith(getAllCharactersURL);
        expect(result).toEqual(mockCharacters);
    });

    it('Should fetch a character by name', async () => {
        const mockCharacter = { id: 1, name: 'Rick Sanchez' };
        const findCharacterURL = `${URL}character?name=Rick Sanchez`;
        fetchMock.mockResponseOnce(JSON.stringify(mockCharacter));

        const result = await RickAndMortyAPI.findCharacter(findCharacterURL);

        expect(fetchMock).toHaveBeenCalledWith(findCharacterURL);
        expect(result).toEqual(mockCharacter);
    });

    it('Should fetch all episodes', async () => {
        const mockEpisodes = [{ id: 1, name: 'Pilot' }];
        const getAllEpisodesURL = `${URL}episode`;
        fetchMock.mockResponseOnce(JSON.stringify(mockEpisodes));

        const result = await RickAndMortyAPI.getAllEpisodes(getAllEpisodesURL);

        expect(fetchMock).toHaveBeenCalledWith(getAllEpisodesURL);
        expect(result).toEqual(mockEpisodes);
    });

    it('Should handle 404 error for fetching all characters', async () => {
        const errorMessage = { error: 'There is nothing here' };
        const getAllCharactersURL = `${URL}character?name=Tomas Shanahan`;
        fetchMock.mockResponseOnce(JSON.stringify(errorMessage), { status: 404 });

        try {
            await RickAndMortyAPI.getAllCharacters(getAllCharactersURL);
        } catch (error) {
            expect(error).toEqual(new Error(errorMessage.error));
        }
        expect(fetchMock).toHaveBeenCalledWith(getAllCharactersURL);
    });
});
