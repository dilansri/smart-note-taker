import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from '../views/app-container';
import { Provider } from 'react-redux'
import reducers from '../core/reducers'
import { createStore } from 'redux'

it('renders without crashing', () => {
  const store = createStore(reducers)
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
                    <AppContainer />
                  </Provider>, div);
});
