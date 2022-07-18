import React from 'react';
import Ball from '../../components/Ball';
import { Container } from './styled';

function Overview() {
  return <Container>
       <div id="overview">
            <h1>Overview</h1>
            <Ball/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum delectus quas sed natus, odio quae dicta suscipit cum non obcaecati laudantium dolore maiores fugiat illum ad ex autem eius!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste distinctio quidem perspiciatis? Nihil eum impedit maxime cum sequi placeat quia alias, corporis, perspiciatis atque itaque voluptatem deserunt ipsam reiciendis!</p>
        </div>
  </Container>;
}

export default Overview;