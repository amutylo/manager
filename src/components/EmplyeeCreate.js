import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from "./common";

class EmplyeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
        </CardSection>
        <CardSection>
          <Input
          label="phone"
          placeholder="55555"
          />
        </CardSection>
        <CardSection></CardSection>
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmplyeeCreate;