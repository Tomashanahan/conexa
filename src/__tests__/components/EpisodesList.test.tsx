import { mockEpisodes } from '@/__mocks__/episodes';
import EpisodesList from '@/components/episodesList/EpisodesList';
import { render, screen } from '@testing-library/react';

describe('EpisodesList', () => {
    beforeEach(() => {
        render(<EpisodesList episodes={mockEpisodes} />);
    });

    it('Should render 1 Episode', () => {
        const characters = screen.getAllByTestId('episode');
        expect(characters.length).toBe(2);
    });
});
