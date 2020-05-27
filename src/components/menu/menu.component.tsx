import { Header } from 'grommet';
import React from 'react';


export const TopBar = (props: any) => (
    <Header
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='light-2'
        pad={{ vertical: 'small', horizontal: 'medium' }}
        elevation='medium'
        {...props}
    />
);

