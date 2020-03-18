import React from 'react';
import { render } from 'react-dom';
import AttributesCard from './attributes-card';
import styled from '@emotion/styled';
import CardCard from './card-card';
import { Provider } from 'react-redux';

import './style.css';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function App() {
  return (
    <AppContainer>
      <AttributesCard />
      <CardCard />
    </AppContainer>
  );
}

render(<App />, document.getElementById('root'));
