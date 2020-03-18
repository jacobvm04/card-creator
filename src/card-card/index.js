import React from 'react';
import styled from '@emotion/styled';
import { Card, MediumHeading, MediumButton } from '../styles';

const CardBackground = styled(Card)`
  min-width: 400px;
  max-width: 700px;
  width: 100%;
  min-height: 800px;
`;

const HeadingContainer = styled.div`
  display: flex
`;

const CopyButton = styled(MediumButton)`
  margin-left: auto;
`;

export default function CardCard() {
  return (
    <CardBackground>
      <HeadingContainer>
        <MediumHeading>Card</MediumHeading>
        <CopyButton>Copy</CopyButton>
      </HeadingContainer>
    </CardBackground>
  );
}
