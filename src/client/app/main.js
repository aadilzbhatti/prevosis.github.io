import React from 'react';
import ReactDOM from 'react-dom';

import ProfileComponent from './ProfileComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello fucboiz!</p>
        <ProfileComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
