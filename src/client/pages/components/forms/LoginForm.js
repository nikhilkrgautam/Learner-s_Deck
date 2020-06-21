import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Grid, Button, Input, Note } from '@zeit-ui/react';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      success: {

      },
      isBlocking: false,
      emailValid: true,
      passwordValid: true,
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    switch(name) {
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
      if(this.state.email.length > 0 || this.state.password.length > 0) {
        this.setState({isBlocking: true});
      } else {
        this.setState({isBlocking: false});
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.success.email === "c" && this.state.success.password === "c") {
      this.setState({isBlocking: false, emailValid: true, passwordValid: true}, () => {
        this.props.logInUser({ email: this.state.email, password: this.state.password });
        this.setState({email: '', password: ''});
        this.setState(prevState => {
          let success = { ...prevState.success };
          success.email = "w";
          success.password = "w";
          return { success };
        })
      });
    }
    else {
      if(this.state.success.email !== "c") {
        this.setState({ emailValid: false });
      } else {
        this.setState({ emailValid: true });
      }
      if(this.state.success.password !== "c") {
        this.setState({ passwordValid: false });
      } else {
        this.setState({ passwordValid: true });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Prompt
          when={this.state.isBlocking}
          message={(location) => `The login form is being filled. Are you sure you want to leave the page?`}
        />
      <form onSubmit={this.handleSubmit} style={{ margin: '50px 0 30px' }}>
          <Grid.Container gap={2} justify="center">
            <Grid xs={24} md={12}>
              <Input
                size="large"
                clearable
                width="100%"
                type="text"
                onChange={this.handleChange}
                status={this.state.emailValid ? null : "error"}
                name="email"
                value={this.state.email}
                id="email"
                placeholder='E-mail address'
              />
            </Grid>
            <Grid xs={24} md={12}>
              <Input.Password
                  size="large"
                  clearable
                  width="100%"
                  placeholder='Password'
                  type="password"
                  onChange={this.handleChange}
                  status={this.state.passwordValid ? null : "error"}
                  name="password"
                  value={this.state.password}
                  id="password"
                />
            </Grid>
          </Grid.Container>
            <Button htmlType="submit" type="success" onClick={this.handleSubmit} style={{cursor: "pointer", marginTop: '20px'}}>
              Log in
            </Button>

        </form>
        {
          this.state.emailValid ? null : (
            <Note type="warning">Enter a valid email address.</Note>
          )
        }
        {
          this.state.passwordValid ? null : (
            <Note type="warning">The password should be atleast 6 characters long.</Note>
          )
        }
        <h3>
          New to us? <Link to='/signup'>Sign Up</Link>
        </h3>
      </React.Fragment>
    );
  }
}

export default LogInForm;
