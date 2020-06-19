import React, { Component } from 'react';
import { Button, Grid, Input, Note } from '@zeit-ui/react';

class ProfileInfoStudent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: '',
        type: '',
        formValid: true,
        classValid: true
    };
  }

  handleChange = (e) => {
    const {value} = e.target;

    this.setState({
      data: value,
      type: this.props.type
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.data.length === 0) {
      this.setState({ formValid: false });
    }
    else if(this.props.type === 'Class') {
      if(this.state.data < 1 || this.state.data > 12) {
        this.setState({ classValid: false, formValid: true });
      }
      else {
        this.props.submitProfileInfo({ data: this.state.data, type: this.state.type });
        this.setState({ data: '' });
      }
    }
    else {
      this.props.submitProfileInfo({ data: this.state.data, type: this.state.type });
      this.setState({ data: '' });
    }
  }

  render () {
    const {type} = this.props;
    return (
      <Grid.Container gap={2} justify="center">
        <Grid xs={24} md={12}>
          <Input
            size="large"
            width="100%"
            type={type === 'Class' ? 'number' : 'text'}
            onChange={this.handleChange}
            name="field"
            value={this.state.data}
            id="field"
            placeholder={type}
          />
        </Grid>
        <Grid xs={24} md={12}>
          <Button type="success" onClick={this.handleSubmit}>Update</Button>
        </Grid>
        {
          this.state.formValid ? null : (
            <Note type="warning">This field cannot be empty.</Note>
          )
        }
        {
          this.state.classValid ? null : (
            <Note type="warning">Enter a number from 1 - 12</Note>
          )
        }
      </Grid.Container>
    )
  }
}

export default ProfileInfoStudent;
