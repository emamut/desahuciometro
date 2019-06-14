import React from 'react';
import {Container, Row} from 'reactstrap';

import List from './Components/List';

function App() {
  return (
    <Container>
      <Row className="mt-4">
        <List></List>
      </Row>
    </Container>
  );
}

export default App;
