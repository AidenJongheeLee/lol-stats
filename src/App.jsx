import React from 'react';
import { Provider } from 'react-redux';
import { ReduxStore } from 'stores';
import MainContainer from 'containers/MainContainer';

import './App.css';

// eslint-disable-next-line
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
const App = () => (
  <>
    <Provider store={ReduxStore}>
      <MainContainer />
    </Provider>
  </>
);

export default App;
