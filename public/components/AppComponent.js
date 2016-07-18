import React from 'react';
import ReactDOM from 'react-dom';

import Profile from './ProfileComponent';

let mount: HTMLElement = document.getElementById('content');
ReactDOM.render(<Profile />, mount);
