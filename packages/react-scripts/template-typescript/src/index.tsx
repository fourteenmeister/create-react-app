import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/App';

import 'index.css';

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

if (module.hot) {
  module.hot.accept(
    'containers/App',
    (): void => {
      const NextApp = require('containers/App').default;
      ReactDOM.render(<NextApp />, rootEl);
    }
  );
}
