import React from 'react';
import CardAttribute from './card-attribute';
import styled from '@emotion/styled';
import CardCutButton from './card-cut-button';
import { Card, MediumHeading } from '../styles';
import { connect } from 'react-redux';
import { setURL, setAuthor, setDate, setTitle, setPublisher } from '../redux/actions';

const AttributesCardBackground = styled(Card)`
  width: 350px;
  padding-top: 2px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function AttributesCard({ setURL, setAuthor, setDate, setTitle, setPublisher }) {

  function handleAttributeChange(attributeName, newValue) {
    switch (attributeName) {
      case 'URL': {
        setURL(newValue);
        return;
      }
      case 'Author': {
        setAuthor(newValue);
        return;
      }
      case 'Date': {
        setDate(newValue);
        return;
      }
      case 'Title': {
        setTitle(newValue);
        return;
      }
      case 'Publisher': {
        setPublisher(newValue);
        return;
      }
      default: {
        return null;
      }
    }
  }

    return (
      <AttributesCardBackground>
        <MediumHeading>Card Attributes</MediumHeading>
        <CardAttribute attributeName="URL" valueChange={handleAttributeChange}/>
        <CardAttribute attributeName="Author" valueChange={handleAttributeChange}/>
        <CardAttribute attributeName="Date" valueChange={handleAttributeChange}/>
        <CardAttribute attributeName="Title" valueChange={handleAttributeChange}/>
        <CardAttribute attributeName="Publisher" valueChange={handleAttributeChange}/>
        <CardCutButton cutCard={null}/>
      </AttributesCardBackground>
    );
}

export default connect(null, { setURL, setAuthor, setDate, setTitle, setPublisher })(AttributesCard);
