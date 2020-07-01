import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Grid, Button, Input, Note } from '@zeit-ui/react';

class JoinusForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      success: {

      },
      isBlocking: false,
      emailValid: true,
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

          default:
            break
    }


    this.setState({
      [name]: value
    }, () => {
      if(this.state.email.length > 0) {
        this.setState({isBlocking: true});
      } else {
        this.setState({isBlocking: false});
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.success.email === "c") {
      this.setState({ isBlocking: false, emailValid: true }, () => {
        this.props.joinUser({ email: this.state.email });
        this.setState({email: ''});
        this.setState(prevState => {
          let success = { ...prevState.success };
          success.email = "w";
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
              <Button htmlType="submit" type="success" onClick={this.handleSubmit} style={{cursor: "pointer"}}>
                Submit
              </Button>
            </Grid>
          </Grid.Container>

        </form>
        {
          this.state.emailValid ? null : (
            <Note type="warning">Enter a valid email address.</Note>
          )
        }
        <h3>
          Already joined? <Link to='/login'>Log in</Link>
        </h3>
      </React.Fragment>
    );
  }
}

export default JoinusForm;
