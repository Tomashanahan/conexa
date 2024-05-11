import { CharactersProvider } from '@/context/charactersContext/CharactersContext';
import { EpisodesProvider } from '@/context/episodesContext/EpisodesContext';

import { Home } from '../page-sections/home';

export default function HomePage() {
    return (
        <main>
            <CharactersProvider>
                <EpisodesProvider>
                    <Home />
                </EpisodesProvider>
            </CharactersProvider>
        </main>
    );
}
