import React from 'react';
import { render } from 'react-dom';
import AttributesCard from './attributes-card';
import styled from '@emotion/styled';
import CardCard from './card-card';
import { Provider } from 'react-redux';
import store from './redux/store';

import './style.css';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <AttributesCard />
        <CardCard />
      </AppContainer>
    </Provider>
  );
}

render(<App />, document.getElementById('root'));
