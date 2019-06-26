import React from 'react';
import {Container, Row} from 'reactstrap';

import data from './data.json';

import List from './Components/List';
import Title from './Components/Title';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      id: 1
    }
  }

  render(){
    let title = data[this.state.id].name

    return (
      <Container>
        <Row className="mt-4">
          <Title text={title}></Title>
        </Row>
        <Row>
          <List data={data} id={this.state.id}></List>
        </Row>
      </Container>
    );
  }
}

export default App;