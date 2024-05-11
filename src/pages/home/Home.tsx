'use client';

import CharactersHoc from '@/components/HOCs/characters/CharactersHoc';
import EpisodesHoc from '@/components/HOCs/episodes/EpisodesHoc';
import FlexBox from '@/components/UI/FlexBox';
import CharactersList from '@/components/charactersList/CharactersList';
import EpisodesList from '@/components/episodesList/EpisodesList';
import Pagination from '@/components/pagination/Pagination';
import { useCharacters } from '@/context/charactersContext/CharactersContext';
import { useEpisodes } from '@/context/episodesContext/EpisodesContext';

import { classes } from './classes';

const Home = () => {
    const { character1List, character2List, loadingCharacters } = useCharacters();
    const { episodesFromCharacter1List, commonEpisodesList, episodesFromCharacter2List } = useEpisodes();

    return (
        <main>
            <FlexBox flexDirection={{ xs: 'column', md: 'row' }}>
                <CharactersHoc characterListLabel="character1List" title="Character 1" sx={classes.charactersContainer}>
                    <CharactersList loadingCharacters={loadingCharacters} characters={character1List.characters} characterListLabel="character1List" />
                    <Pagination characterListLabel="character1List" count={character1List?.characters?.info?.pages} />
                </CharactersHoc>
                <CharactersHoc characterListLabel="character2List" title="Character 2" sx={classes.charactersContainer}>
                    <CharactersList loadingCharacters={loadingCharacters} characters={character2List.characters} characterListLabel="character2List" />
                    <Pagination characterListLabel="character2List" count={character2List?.characters?.info?.pages} />
                </CharactersHoc>
            </FlexBox>

            <FlexBox gap={2} flexDirection={{ xs: 'column', md: 'column', lg: 'column', xl: 'row' }}>
                <EpisodesHoc sx={classes.episodesContainer} title="Character 1 episodes">
                    <EpisodesList episodes={episodesFromCharacter1List} />
                </EpisodesHoc>
                <EpisodesHoc sx={classes.episodesContainer} title="Sheared episodes">
                    <EpisodesList episodes={commonEpisodesList} />
                </EpisodesHoc>
                <EpisodesHoc sx={classes.episodesContainer} title="Character 2 episodes">
                    <EpisodesList episodes={episodesFromCharacter2List} />
                </EpisodesHoc>
            </FlexBox>
        </main>
    );
};

export default Home;
