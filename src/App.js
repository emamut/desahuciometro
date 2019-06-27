import React from 'react';
import {Container, Row} from 'reactstrap';

import data from './data.json';

import List from './Components/List';
import Title from './Components/Title';

class App extends React.Component {
  constructor() {
    super()
    this.changeID = this.changeID.bind(this);

    this.state = {
      id: 1
    }
  }

  changeID(id) {
    this.setState({ id: id })
  }

  render(){
    let title = data[this.state.id].name

    return (
      <Container>
        <Row className="mt-4">
          <Title text={title}></Title>
        </Row>
        <Row>
          <List data={data} id={this.state.id} changeID={ this.changeID }></List>
        </Row>
      </Container>
    );
  }
}

export default App;