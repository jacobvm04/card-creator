import React from 'react';
import styled from '@emotion/styled';
import { TextInput, divider, smallHeading } from '../styles';

const AttributeInput = styled(TextInput)`
  width: 80%;
  margin-left: 5%;
`;

const AttributeLabel = styled.h3`
  ${smallHeading}
  margin-left: 5%;
  padding-left: 10px;
`;

const AttributeDiv = styled.div`
  padding-bottom: 25px;
  ${divider}
`;

export default ({ attributeName, valueChange }) => {
  return (
    <AttributeDiv>
      <AttributeLabel>{ attributeName }</AttributeLabel>
      <AttributeInput placeholder={attributeName} onChange={e => valueChange(attributeName, e.target.value)} type="text"/>
    </AttributeDiv>
  );
}
