import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import { Container, Header, Segment, Message, Button, Form, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      success: {

      },
      isBlocking: false,
      formValid: true
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    switch(name) {
        case "username":
          {
            if(value.match(/^[a-zA-Z0-9_.-]*$/) && value.length > 0) {
              this.setState(prevState => {
                let success = { ...prevState.success };
                success[name] = "c";
                return { success };
              })
            }
            else {
              this.setState(prevState => {
                let success = { ...prevState.success };
                success[name] = "w";
                return { success };
              })
            }
            break
          }
        case "email":
          {
            if(value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
              this.setState(prevState => {
                let success = { ...prevState.success };
                success[name] = "c";
                return { success };
              })
            }
            else {
              this.setState(prevState => {
                let success = { ...prevState.success };
                success[name] = "w";
                return { success };
              })
            }
            break
          }

          case "password":
            {
              if(value.length >= 6) {
                this.setState(prevState => {
                  let success = { ...prevState.success };
                  success[name] = "c";
                  return { success };
                })
              }
              else {
                this.setState(prevState => {
                  let success = { ...prevState.success };
                  success[name] = "w";
                  return { success };
                })
              }
              break
            }
          default:
            break
    }


    this.setState({
      [name]: value
    }, () => {
      if(this.state.email.length > 0 || this.state.password.length > 0 || this.state.username.length > 0 ) {
        this.setState({isBlocking: true});
      } else {
        this.setState({isBlocking: false});
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.success.email === "c" && this.state.success.password === "c" && this.state.success.username === "c") {
      this.setState({isBlocking: false, formValid: true}, () => {
        this.props.signUpUser({ email: this.state.email, password: this.state.password, username: this.state.username });
        this.setState({email: '', password: '', username: ''});
      });
    }
    else {
      this.setState({ formValid: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Prompt
          when={this.state.isBlocking}
          message={(location) => `The signup form is being filled. Are you sure you want to leave the page?`}
        />
        <Header as='h2' color='teal' textAlign='center'>
          Sign-up with your email
        </Header>
        <Form size='large' onSubmit={this.handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user circle'
              iconPosition='left'
              type="text"
              onChange={this.handleChange}
              name="username"
              value={this.state.username}
              id="username"
              placeholder="Username"
            />
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              type="text"
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              id="email"
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type="password"
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
              id="password"
            />
            <Button color='teal' fluid size='large' type="submit" style={{cursor: "pointer"}}>
              Login
            </Button>
          </Segment>
        </Form>
        {
          this.state.formValid ? null : (
            <Message negative>
              Enter a valid email address and make sure that the password is atleast 6 characters. The username should contain only letters, numbers or _ . -
            </Message>
          )
        }
        <Message>
          Already registered? <Link to='/login'>Log In</Link>
        </Message>
      </React.Fragment>
    );
  }
}

export default LogInForm;
