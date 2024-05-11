import { colors } from '@/theme/theme-colors';

const commonContainerStyles = {
    bgcolor: colors.white.primary,
    p: 3,
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    border: `1px solid ${colors.grey[300]}`,
    m: { xs: 0, md: 1 },
    mb: 2,
    borderRadius: 4,
};

export const classes = {
    charactersContainer: {
        ...commonContainerStyles,
        height: 600,
    },
    episodesContainer: {
        ...commonContainerStyles,
        justifyContent: 'flex-start',
    },
};
