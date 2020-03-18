import React, { useState } from 'react';
import CardAttribute from './card-attribute';
import styled from '@emotion/styled';
import CardCutButton from './card-cut-button';
import { Card, MediumHeading } from './styles';
import { connect } from 'react-redux';
import { setURL, setAuthor, setDate, setTitle, setPublisher } from './redux/actions';
import './style.css';

const metascraper = require('metascraper')([require('metascraper-author')(), require('metascraper-date')(), require('metascraper-title')(), require('metascraper-publisher')(), require('./metascraper-article-body')()]);

const AttributesCardBackground = styled(Card)`
  width: 350px;
  padding-top: 2px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function AttributesCard({ setURL, setAuthor, setDate, setTitle, setPublisher }) {
  const [state, setState] = useState({});

  function handleAttributeChange(attributeName, newValue) {
    setState({
      ...state,
      [attributeName]: newValue
    });
  }

  async function getData() {
    const res = await fetch('https://www.whateverorigin.org/get?url=' + encodeURIComponent(state.URL) + '&callback=?');
    const data = await metascraper({ html: await res.text(), url: state.URL });
    for (const prop in data) {
      handleAttributeChange(prop, data[prop]);
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
        <CardCutButton cutCard={getData}/>
      </AttributesCardBackground>
    );
}

export default connect(null, { setURL, setAuthor, setDate, setTitle, setPublisher })(AttributesCard);
