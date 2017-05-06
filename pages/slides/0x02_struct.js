import Slide from '../../components/slide.js';
import Title from '../../components/title.js';
import Headline from '../../components/headline.js';
import Enum from '../../components/enum.js';

export default () => (
  <Slide next={'/slides/0x03_define'} prev={'/slides/0x01_hello_world'}>
    <Title>0x02_struct</Title>
    <Headline>Gliederung</Headline>
    <Enum>Was ist JavaScript</Enum>
    <Enum>Wo wird es verwendet</Enum>
    <Enum>Anwendung im Browser</Enum>
    <Enum>Libraries & Frameworks</Enum>
  </Slide>
);