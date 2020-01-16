// Core
import * as React from 'react';
import { storiesOf } from '@storybook/react';


// Components
import Image from './Image.component';


storiesOf('Image', module)
    .add('Plain', () => (
        <Image
            width="150"
            height="150"
            src="https://via.placeholder.com/150"
        />
    ))
    .add('With fallback', () => (
        <Image
            width="150"
            height="150"
            src="https://via-nowhere.placeholder.com/150"
            fallback="https://via.placeholder.com/160"
        />
    ));