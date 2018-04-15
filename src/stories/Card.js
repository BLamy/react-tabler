import React from 'react'
import * as Form from '../Form'
import { storiesOf } from '@storybook/react';
import Card from '../Card'

storiesOf('Cards', module).add('Standard', () => 
  <Card>
    <Card.Header>
      <Card.Title>This is a standard card</Card.Title>
      <Card.Options>
        <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
        <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
      </Card.Options>
    </Card.Header>
    <Card.Body>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
    </Card.Body>
    <Card.Footer>
      This is standard card footer
    </Card.Footer>
  </Card>
).add('Built', () => 
<Card>
  <Card.Header>
    <Card.Title>This is a standard card</Card.Title>
    <Card.Options>
      <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
      <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
    </Card.Options>
  </Card.Header>
  <Card.Body>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  </Card.Body>
</Card>
).add('Blue status', () => 
<Card>
  <Card.Status blue/>
  <Card.Header>
    <Card.Title>This is a standard card</Card.Title>
    <Card.Options>
      <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
      <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
    </Card.Options>
  </Card.Header>
  <Card.Body>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  </Card.Body>
</Card>
).add('Green status', () => 
<Card>
  <Card.Status green/>
  <Card.Header>
    <Card.Title>This is a standard card</Card.Title>
    <Card.Options>
      <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
      <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
    </Card.Options>
  </Card.Header>
  <Card.Body>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  </Card.Body>
</Card>
).add('Orange status', () => 
<Card>
  <Card.Status orange/>
  <Card.Header>
    <Card.Title>This is a standard card</Card.Title>
    <Card.Options>
      <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
      <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
    </Card.Options>
  </Card.Header>
  <Card.Body>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  </Card.Body>
</Card>
).add('Red status', () => 
<Card>
  <Card.Status red/>
  <Card.Header>
    <Card.Title>This is a standard card</Card.Title>
    <Card.Options>
      <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
      <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
    </Card.Options>
  </Card.Header>
  <Card.Body>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  </Card.Body>
</Card>
).add('Yellow status', () => 
<Card>
  <Card.Status yellow/>
  <Card.Header>
    <Card.Title>This is a standard card</Card.Title>
    <Card.Options>
      <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
      <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
    </Card.Options>
  </Card.Header>
  <Card.Body>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  </Card.Body>
</Card>
).add('Teal status', () => 
<Card>
  <Card.Status teal/>
  <Card.Header>
    <Card.Title>This is a standard card</Card.Title>
    <Card.Options>
      <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
      <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
    </Card.Options>
  </Card.Header>
  <Card.Body>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  </Card.Body>
</Card>
).add('Purple status', () => 
<Card>
  <Card.Status purple/>
  <Card.Header>
    <Card.Title>This is a standard card</Card.Title>
    <Card.Options>
      <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
      <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
    </Card.Options>
  </Card.Header>
  <Card.Body>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  </Card.Body>
</Card>
).add('Left status', () => 
<Card>
  <Card.Status left blue/>
  <Card.Header>
    <Card.Title>This is a standard card</Card.Title>
    <Card.Options>
      <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
      <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
    </Card.Options>
  </Card.Header>
  <Card.Body>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  </Card.Body>
</Card>
).add('Success Alert', () => 
<Card>
  <Card.Header>
    <Card.Title>This is a standard card</Card.Title>
    <Card.Options>
      <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
      <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
    </Card.Options>
  </Card.Header>
  <Card.Alert success>
    Adding action was successful
  </Card.Alert>
  <Card.Body>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  </Card.Body>
</Card>
).add('Danger Alert', () => 
<Card>
  <Card.Header>
    <Card.Title>This is a standard card</Card.Title>
    <Card.Options>
      <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
      <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
    </Card.Options>
  </Card.Header>
  <Card.Alert danger>
    Adding action failed
  </Card.Alert>
  <Card.Body>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  </Card.Body>
</Card>
)
