import { colors } from '@/theme/theme-colors';

export const classes = {
    textField: {
        '&.text-field-disabled, &.text-field-disabled > label': {
            opacity: 0.5,
        },
        '& > div': {
            borderRadius: 4,
        },
        '& > div > input': {
            fontSize: 14,
        },
        '& > div > fieldset': {
            borderColor: colors.grey[300],
        },
        '& .Mui-focused > fieldset': {
            borderColor: `${colors.grey[300]} !important`,
        },
        '& > label, & > div > label': {
            fontSize: 14,
            color: colors.grey[600],
        },
        '&.text-field-error > p': {
            fontSize: 10,
        },
        width: '100%',
    },
};
