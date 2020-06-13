import React, { Component } from 'react';
import { Container, Header, Segment, Grid, Image, Button, Icon } from 'semantic-ui-react';
import dragonImage from '../assets/images/dragon.png';

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
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Teachers who want to teach students all around the nation
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can help you to reach students in every area of the country.
                  Let us delight your students and empower your needs... through our platform.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Students who want to learn from the best teachers in the country
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  You have to come to the right place. Our platform will help you to find the best courses.
                  The best education is just a click away.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image bordered rounded size='large' src={dragonImage} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </React.Fragment>
    );
  }
}

export default Home;
