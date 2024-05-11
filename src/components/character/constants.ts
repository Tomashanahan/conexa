import { Species, Status } from '@/models/characters';
import { colors } from '@/theme/theme-colors';

export interface StatusColor {
    color: string;
    bgcolor: string;
    border: string;
}

const colorHelper = (color500: string, color100: string) => ({
    color: color500,
    bgcolor: color100,
    border: `1px solid ${color500}`,
});

export const statusColors: Record<Status, StatusColor> = {
    Alive: colorHelper(colors.green[500], colors.green[100]),
    unknown: colorHelper(colors.grey[500], colors.grey[100]),
    Dead: colorHelper(colors.red[500], colors.red[100]),
};

export const speciesColors: Record<Species, StatusColor> = {
    Human: colorHelper(colors.purple[500], colors.purple[100]),
    Alien: colorHelper(colors.teal[500], colors.teal[100]),
    unknown: colorHelper(colors.pink[500], colors.pink[100]),
    Humanoid: colorHelper(colors.cyan[500], colors.cyan[100]),
    Robot: colorHelper(colors.lime[500], colors.lime[100]),
    Animal: colorHelper(colors.amber[500], colors.amber[100]),
    'Mythological Creature': colorHelper(colors.indigo[500], colors.indigo[100]),
    Poopybutthole: colorHelper(colors.emerald[500], colors.emerald[100]),
};
