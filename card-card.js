import React from 'react';
import styled from '@emotion/styled';
import { Card, MediumHeading } from './styles';

const CardBackground = styled(Card)`
  min-width: 400px;
  max-width: 700px;
  width: 100%;
  min-height: 800px;
`;

const HeadingContainer = styled.div`
  display: flex
`;

export default function CardCard() {
  return (
    <CardBackground>
      <HeadingContainer>
        <MediumHeading>Card</MediumHeading>
      </HeadingContainer>
    </CardBackground>
  );
}
