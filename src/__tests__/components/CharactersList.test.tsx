import CharactersList from '@/components/charactersList/CharactersList';
import { Characters } from '@/models/characters';
import { render, screen } from '@testing-library/react';

import { mockCharacters } from '../../__mocks__/characters';

describe('CharactersList', () => {
    beforeEach(() => {
        render(<CharactersList loadingCharacters={false} characters={mockCharacters} characterListLabel="character1List" />);
    });

    it('Should render the mock character', () => {
        expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });

    it('Should render 1 Character', () => {
        const characters = screen.getAllByTestId('character');
        expect(characters.length).toBe(2);
    });
});

describe('CharactersList Loading State', () => {
    it('Should render 6 loading skeletons when loading', () => {
        render(<CharactersList loadingCharacters={true} characters={{} as Characters} characterListLabel="character1List" />);
        const skeletons = screen.getAllByTestId('loading-skeleton');
        expect(skeletons.length).toBe(6);
    });
});
