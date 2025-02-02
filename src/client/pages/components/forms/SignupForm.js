import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Grid, Input, Button, Radio, Note } from '@zeit-ui/react';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      conpass: '',
      success: {

      },
      isBlocking: false,
      emailValid: true,
      passwordValid: true,
      usernameValid: true,
      passwordMatch: true,
      buttonLoading: false
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    switch(name) {

        case "username":
          {
            if(value.match(/^[a-zA-Z.]+( [a-zA-Z.]+)*$/) && value.length > 0 && value.length < 255) {
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
            if(value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && value.length < 255) {
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
              if(value.length >= 6 && value.length < 255) {
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
      if(this.state.email.length > 0 || this.state.password.length > 0 || this.state.username.length > 0 || this.state.conpass.length > 0 ) {
        this.setState({isBlocking: true});
      } else {
        this.setState({isBlocking: false});
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.conpass);
    if(this.state.success.email === "c" && this.state.success.password === "c" && this.state.success.username === "c" && this.state.password === this.state.conpass) {
      this.setState({isBlocking: false, emailValid: true, usernameValid: true, passwordValid: true, passwordMatch: true, buttonLoading: true}, () => {
        this.props.signUpUser({ email: this.state.email, password: this.state.password, username: this.state.username });
        this.setState({email: '', password: '', username: '', conpass: ''});
        this.setState(prevState => {
          let success = { ...prevState.success };
          success.email = "w";
          success.password = "w";
          success.username = "w";
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
      if(this.state.success.username !== "c") {
        this.setState({ usernameValid: false });
      } else {
        this.setState({ usernameValid: true });
      }
      if(this.state.success.password !== "c") {
        this.setState({ passwordValid: false });
      } else {
        this.setState({ passwordValid: true });
      }
      if(this.state.password !== this.state.conpass) {
        this.setState({ passwordMatch: false });
      } else {
        this.setState({ passwordMatch: true });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Prompt
          when={this.state.isBlocking}
          message={(location) => `The signup form is being filled. Are you sure you want to leave the page?`}
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
                status={this.state.usernameValid ? null : "error"}
                name="username"
                value={this.state.username}
                id="username"
                placeholder="Name"
              />
            </Grid>
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
              status={(this.state.passwordValid && this.state.passwordMatch) ? null : "error"}
              name="password"
              value={this.state.password}
              id="password"
            />
            </Grid>
            <Grid xs={24} md={12}>
            <Input.Password
              size="large"
              clearable
              width="100%"
              placeholder='Confirm Password'
              type="password"
              onChange={this.handleChange}
              status={this.state.passwordMatch ? null : "error"}
              name="conpass"
              value={this.state.conpass}
              id="conpass"
            />
            </Grid>
          </Grid.Container>
          <Button loading={this.state.buttonLoading} htmlType="submit" type="success" style={{cursor: "pointer", marginTop: '30px'}} onClick={this.handleSubmit}>
            Sign up
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
        {
          this.state.usernameValid ? null : (
            <Note type="warning">The name should contain only letters and spaces.</Note>
          )
        }
        {
          this.state.passwordMatch ? null : (
            <Note type="warning">The passwords do not match.</Note>
          )
        }
        <h3>
          Already registered? <Link to='/login'>Log In</Link>
        </h3>
      </React.Fragment>
    );
  }
}

export default LogInForm;
