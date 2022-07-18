import React from 'react';
import { Container} from './styled';

function Ball() {
  return <Container>
      <div className='line'>
          <div className='ball'></div>
      </div>
  </Container>;
}

export default Ball;