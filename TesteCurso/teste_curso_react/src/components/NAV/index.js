import React from 'react';
import Tab from '../TAB';

import { Container } from './styled';

function Nav() {
  return <Container>
      
      <Tab nameTab="Overview"></Tab>
      <Tab nameTab="Usage Information"></Tab>
      <Tab nameTab="Support"></Tab>
  </Container>;
}

export default Nav;