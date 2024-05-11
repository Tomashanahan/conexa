import { mockEpisodes } from '@/__mocks__/episodes';
import Episode from '@/components/episode/Episode';
import { render, screen } from '@testing-library/react';

describe('Episode', () => {
    const mockEpisode = mockEpisodes[0];

    beforeEach(() => {
        render(<Episode episode={mockEpisode} />);
    });

    it('Should render the episode, name, air_date', () => {
        expect(screen.getByText(mockEpisode.episode)).toBeInTheDocument();
        expect(screen.getByText(mockEpisode.name)).toBeInTheDocument();
        expect(screen.getByText(mockEpisode.air_date)).toBeInTheDocument();
    });

    it('should display a tooltip for long episode names', () => {
        const longNameEpisode = { ...mockEpisode, name: 'A very long episode name that exceeds the typical length' };
        render(<Episode episode={longNameEpisode} />);

        const tooltip = screen.getByLabelText(longNameEpisode.name);

        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveStyle('white-space: nowrap');
    });

    it('should not display a tooltip for short episode names', () => {
        const shortNameEpisode = { ...mockEpisode, name: 'A episode name' };
        render(<Episode episode={shortNameEpisode} />);

        const episodeName = screen.getByText(shortNameEpisode.name);

        expect(episodeName).not.toHaveAttribute(`aria-label= ${shortNameEpisode.name}`);
    });
});
