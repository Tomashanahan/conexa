import { colors } from '@/theme/theme-colors';

export const classes = {
    episodeContainer: {
        justifyContent: 'space-between',
        border: `1px solid ${colors.grey[300]}`,
        p: 2,
        borderRadius: 4,
    },
    episode: {
        fontWeight: 700,
        mr: 1,
    },
    episodeName: {
        fontWeight: 300,
        color: colors.grey[700],
        fontSize: 14,
        width: 200,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    episodeDate: {
        border: `1px solid ${colors.cyan[500]}`,
        py: 1,
        px: 2,
        borderRadius: 3,
        borderColor: colors.cyan[500],
        color: colors.cyan[500],
    },
};
