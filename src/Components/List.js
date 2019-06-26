import React from 'react';
import { Col, ListGroup, ListGroupItem } from 'reactstrap';

class List extends React.Component {
  render() {
    return (
      <Col md="3">
        <ListGroup>
          {
            this.props.data.map((item, key) =>
              <ListGroupItem key={key} tag="a" href="#" className={ this.props.id === key ? 'active' : '' } action>{item.name}</ListGroupItem>
            )
          }
        </ListGroup>
      </Col>
    )
  }
}

export default List