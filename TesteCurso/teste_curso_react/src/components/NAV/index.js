import React from 'react';
import Tab from '../TAB';

import { Container } from './styled';

function Nav({testName}) {
  return <Container>
      
      <Tab nameTab="Overview"  onclick={testName}></Tab>
      <Tab nameTab="Usage Information" funName='cliked'></Tab>
      <Tab nameTab="Support"></Tab>
  </Container>;
}

export default Nav;