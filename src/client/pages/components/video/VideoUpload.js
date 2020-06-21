import React, { Component } from 'react';
import { Button, Grid } from '@zeit-ui/react';

class VideoUpload extends Component {

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
    const fileData = new FormData();
    fileData.append('myFile',this.state.file);
    this.props.uploadFile(fileData);
    this.setState({ file: null });
  }

  render () {
    return (
      <div style={{marginBottom: '20px'}}>
        <Grid.Container gap={2} justify="center" style={{marginTop: '30px'}}>
          <Grid xs={24} md={12}>
            <input
              name="myFile"
              type="file"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid xs={24} md={12}>
            <Button type="success" onClick={this.handleSubmit}>Upload</Button>
          </Grid>
        </Grid.Container>
      </div>
    )
  }
}

export default VideoUpload
