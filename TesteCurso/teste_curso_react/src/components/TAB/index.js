import React from 'react';

import { Container } from './styled';

function Tab({nameTab, funName}) {
  
  return <Container className={funName}>
    
    {nameTab}
   
     
    </Container>
  ;
}

export default Tab;
