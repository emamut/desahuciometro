import React from 'react';
import { Col } from 'reactstrap';

class Title extends React.Component {
  render () {
    return (
      <Col>
        <h1 className="text-center">{this.props.text}</h1>
      </Col>
    )
  }
}

export default Title;