import React, { Component } from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react';

class Home extends Component {

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Container text>
          <Header
            as='h1'
            content="Learner's Desk"
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '3em',
            }}
          />
          <Header
            as='h2'
            content='Bringing education where you need it.'
            style={{
              fontSize: '1.7em',
              fontWeight: 'normal',
              marginTop: '1.5em',
            }}
          />
          <Button primary size='huge'>
            Get Started
            <Icon name='right arrow' />
          </Button>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
