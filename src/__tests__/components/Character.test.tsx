import Character from '@/components/character/Character';
import { CharactersContext } from '@/context/charactersContext/CharactersContext';
import { CharactersContextProps } from '@/context/charactersContext/types';
import { colors } from '@/theme/theme-colors';
import { render, screen } from '@testing-library/react';

import { mockCharacters } from '../../__mocks__/characters';

describe('Validate that the Character component is rendering as it should', () => {
    const character = mockCharacters.results[0];
    const providerValue: CharactersContextProps = {
        character1List: { characters: { ...mockCharacters }, characterSelected: null, search: '' },
        character2List: { characters: { ...mockCharacters }, characterSelected: null, search: '' },
        getCharactersFromPage: jest.fn(),
        loadingCharacters: false,
        findCharacterFromPage: jest.fn(),
        handleSelectCharacter: jest.fn(),
    };

    const renderCharacterWithContext = (value: CharactersContextProps) => {
        render(
            <CharactersContext.Provider value={value}>
                <Character character={character} characterListLabel="character1List" />
            </CharactersContext.Provider>
        );
    };

    it('Should render the name, species, and status', () => {
        renderCharacterWithContext(providerValue);
        expect(screen.getByText(character.name)).toBeInTheDocument();
        expect(screen.getByText(character.species)).toBeInTheDocument();
        expect(screen.getByText(character.status)).toBeInTheDocument();
    });

    it("Should have the correct 'alt' attribute in the image", () => {
        renderCharacterWithContext(providerValue);
        expect(screen.getByAltText(character.name)).toBeInTheDocument();
    });

    it('Should have a border when the character is selected', () => {
        providerValue.character1List.characterSelected = character;
        renderCharacterWithContext(providerValue);

        const characterElement = screen.getByTestId('character');
        expect(characterElement).toHaveStyle(`border: 3px solid ${colors.blue[600]}`);
    });
});
