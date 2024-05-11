import { StackProps } from '@mui/material';
import { PropsWithChildren } from 'react';

export interface EpisodesHocProps extends PropsWithChildren, StackProps {
    title: string;
}
