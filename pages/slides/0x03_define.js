import Page from '../../layouts/page.js';
import Slide from '../../components/slide.js';
import Title from '../../components/title.js';
import Headline from '../../components/headline.js';
import Enum from '../../components/enum.js';

export default () => (
  <Page>
    <Slide next={'/slides/0x04_call_by_reference'} prev={'/slides/0x02_struct'}>
      <Title>0x03_define</Title>
      <Headline>Was ist JavaScript</Headline>
      <Enum>Wurde von Netscape entwickelt</Enum>
      <Enum>Ist eine interpretierte Skriptsprache</Enum>
      <Enum>
        Wird für viele Bereiche genutzt
        <p>z.B.&nbsp;
        <a href="https://facebook.github.io/react-native/" target="_blank">Native Apps für Android, iOS,</a>&nbsp;
        <a href="https://electron.atom.io/" target="_blank">Windows und OSX,</a>&nbsp;<br />
        <a href="https://nodejs.org/en/" target="_blank">Serverseitige Programme,</a>&nbsp;
        <a href="https://facebook.github.io/react/" target="_blank">WebApps</a>&nbsp;...</p>
      </Enum>
    </Slide>
  </Page>
);