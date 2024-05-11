import { colors } from '@/theme/theme-colors';

export const classes = {
    cardContainer: {
        border: `1px solid ${colors.grey[300]}`,
        borderRadius: 4,
        mb: 2,
        p: 1,
        gap: 2,
        '& > img': {
            borderRadius: 3,
            height: '100%',
        },
        cursor: 'pointer',
    },
    chip: {
        textTransform: 'capitalize',
    },
    chipsContainer: {
        gap: 1,
        mt: 1,
    },
    characterName: {
        fontSize: 16,
        fontWeight: 600,
    },
};
