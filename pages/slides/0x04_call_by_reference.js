import { Component } from 'react';
import fetch from 'isomorphic-fetch';

import Slide from '../../components/slide.js';
import Title from '../../components/title.js';
import Headline from '../../components/headline.js';
import Enum from '../../components/enum.js';
import Code from '../../components/code.js'
import Column from '../../components/column.js';

export default class extends Component {
  static async getInitialProps() {
    const response = await fetch('http://localhost:3000/static/html_template.txt');
    const htmlCode = await response.text();
    return { htmlCode };
  }

  render() {
    return (
      <Slide>
        <Title>0x04_call_by_reference</Title>
        <Headline>Anwendung im Browser</Headline>
        <Column>
          <Enum>JavaScript kann direkt im { '<script>-Tag' } geschrieben werden</Enum>
          <Enum>oder als externe Datei durch das src-Attribut eingebunden werden</Enum>
        </Column>
        <Column>
          <Code language='html'>{ this.props.htmlCode }</Code>
        </Column>
      </Slide>
    );
  }
};