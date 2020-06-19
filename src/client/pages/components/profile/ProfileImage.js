import React, { Component } from 'react';
import { Button, Grid } from '@zeit-ui/react';

class ProfileImage extends Component {

  constructor(props) {
    super(props);
    this.state ={
        file: null
    };
  }

  handleChange = (e) => {
    this.setState({ file :e.target.files[0] });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const imageData = new FormData();
    imageData.append('myImage',this.state.file);
    this.props.submitProfileImage(imageData);
    this.setState({ file: null });
  }

  render () {
    return (
      <Grid.Container gap={2} justify="center">
        <Grid xs={24} md={12}>
          <input
            name="myImage"
            type="file"
            onChange={this.handleChange}
          />
        </Grid>
        <Grid xs={24} md={12}>
          <Button type="success" onClick={this.handleSubmit}>Upload</Button>
        </Grid>
      </Grid.Container>
    )
  }
}

export default ProfileImage
