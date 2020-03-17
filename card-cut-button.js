import React from 'react';
import styled from '@emotion/styled';
import { LargeCardBottomButton } from './styles';

export default ({ cutCard }) => {
  return (
    <LargeCardBottomButton onClick={() => cutCard()}>Cut Card</LargeCardBottomButton>
  );
}
