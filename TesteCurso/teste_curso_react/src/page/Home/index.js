import React, { useState } from 'react';
import { Container } from './styled';
import Nav from '../../components/NAV';
import Overview from '../Overview';
import Information from '../Information';
import Support from '../Support';

function Home() {
  let pageCliked = 'Overview';

  const selectPage=()=>{
    console.log("selecionou!");
    // console.log(page);
  }
  return <>
    <Container>
        <Nav testName={()=>selectPage}/>
        <pageCliked/>
        <Overview />
        <Information/>
        <Support/>
    </Container>
  </>;
}

export default Home;