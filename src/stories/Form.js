import React from 'react'
import * as Form from '../Form'
import { storiesOf } from '@storybook/react';

storiesOf('Form', module).add('Static', () => 
  <Form.Group>
    <Form.Label>Static</Form.Label>
    <Form.Control.PlainText>Username</Form.Control.PlainText>
  </Form.Group>
).add('Text', () => 
<Form.Group>
  <Form.Label>Static</Form.Label>
  <Form.Control type="text" name="asf" placeholder="Text..." />
</Form.Group>
);
