import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendFile } from '../reduxStore/actions/fileActions';
import { Button, Grid, Note } from '@zeit-ui/react';

class Upload extends Component {

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
    this.props.sendFile(imageData);
  }

  render() {
    const {fileError, fileSent} = this.props;
    console.log(fileError, fileSent);

    return (
      <React.Fragment>
        <div style={{ margin: '30px auto', width: '60%' }}>
          <h1 style={{marginBottom: '40px'}}>Upload Files</h1>
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
          {
            fileError ? (
              <Note type="error" style={{marginTop: '20px'}}>{ fileError }</Note>
            ) : null
          }
          {
            fileSent ? (
              <Note type="success" style={{marginTop: '20px'}}>File uploaded successfully!</Note>
            ) : null
          }
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    fileError: state.file.fileError,
    fileSent: state.file.fileSent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendFile: (imageData) => {
      dispatch(sendFile(imageData));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
