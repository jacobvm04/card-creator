import React from 'react';
import { LargeCardBottomButton } from './styles';

export default ({ cutCard }) => {
  return (
    <LargeCardBottomButton onClick={() => cutCard()}>Cut Card</LargeCardBottomButton>
  );
}
