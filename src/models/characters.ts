import { Info } from './common';

export interface Characters {
    info: Info;
    results: Character[];
}

export interface Character {
    id: number;
    name: string;
    status: Status;
    species: Species;
    type: string;
    gender: Gender;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export type Gender = 'Male' | 'Female' | 'unknown';

export interface Location {
    name: string;
    url: string;
}

export type Species = 'Human' | 'Alien' | 'Humanoid' | 'Robot' | 'Animal' | 'Mythological Creature' | 'Poopybutthole' | 'unknown';

export type Status = 'Alive' | 'unknown' | 'Dead';
