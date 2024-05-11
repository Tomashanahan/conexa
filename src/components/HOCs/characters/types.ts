import { CharacterListLabel } from '@/context/charactersContext/types';
import { StackProps } from '@mui/material';
import { PropsWithChildren } from 'react';

export interface CharactersHocProps extends PropsWithChildren, StackProps {
    title: string;
    characterListLabel: CharacterListLabel;
}
