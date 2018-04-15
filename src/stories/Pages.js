import React from 'react'
import { storiesOf } from '@storybook/react';
import styled from 'styled-components'
import Text from '../Text'

const Container = styled.div`
    width: 100%;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1280px) {
      max-width: 1200px;
    }
    ${props => props.center ? "text-align: center" : ""}
`

storiesOf('Pages', module).add('400', () => 
<Container center>
    <Text h1 muted>400</Text>
    <Text h2>Oops.. You just found an error page..</Text>
    <Text h4 muted>We are sorry but your request contains bad syntax and cannot be fulfilled…</Text>
</Container>
).add('401', () => 
<Container center>
    <Text h1 muted>401</Text>
    <Text h2>Oops.. You just found an error page..</Text>
    <Text h4 muted>We are sorry but you are not authorized to access this page…</Text>
</Container>
).add('402', () => 
<Container center>
    <Text h1 muted>402</Text>
    <Text h2>Oops.. You just found an error page..</Text>
    <Text h4 muted>We are sorry but our service is currently not available…</Text>
</Container>
).add('403', () => 
<Container center>
    <Text h1 muted>403</Text>
    <Text h2>Oops.. You just found an error page..</Text>
    <Text h4 muted>We are sorry but you do not have permission to access this page…</Text>
</Container>
).add('404', () => 
<Container center>
    <Text h1 muted>404</Text>
    <Text h2>Oops.. You just found an error page..</Text>
    <Text h4 muted>Sorry that page was not found..</Text>
</Container>
).add('500', () => 
<Container center>
    <Text h1 muted>500</Text>
    <Text h2>Oops.. You just found an error page..</Text>
    <Text h4 muted>We are sorry but your request contains bad syntax and cannot be fulfilled…</Text>
</Container>
).add('503', () => 
<Container center>
    <Text h1 muted>503</Text>
    <Text h2>Oops.. You just found an error page..</Text>
    <Text h4 muted>Page temporarily unavailable. Please reload your browser.</Text>
</Container>
)


export default Container