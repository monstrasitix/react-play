// Core
import * as React from 'react';
import { storiesOf } from '@storybook/react';


// Components
import Icon from './Icon.component';


storiesOf('Icon', module)
    .add('Plain', () => (
        <Icon type="bars" />
    ));