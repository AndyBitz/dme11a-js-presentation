import Slide from '../components/slide.js';
import Title from '../components/title.js';
import Headline from '../components/headline.js';
import Enum from '../components/enum.js';

export default () => (
  <Slide>
    <Title>0x03_define</Title>
    <Headline>Was ist JavaScript</Headline>
    <Enum>Wurde von Netscape entwickelt</Enum>
    <Enum>
      Ist eine interpretierte Skriptsprache
      <p>muss von einem Programm interpretiert werden</p>
    </Enum>
    <Enum>
      Kann für viele Bereiche genutzt werden
      <p>z.B.&nbsp;
      <a href="https://facebook.github.io/react-native/" target="_blank">Native Apps für Android, iOS,</a>&nbsp;
      <a href="https://electron.atom.io/" target="_blank">Windows und OSX,</a>&nbsp;<br />
      <a href="https://nodejs.org/en/" target="_blank">Serverseitige Programme,</a>&nbsp;
      <a href="https://facebook.github.io/react/" target="_blank">WebApps</a>&nbsp;...</p>
    </Enum>
  </Slide>
);