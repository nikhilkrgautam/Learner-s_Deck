import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress } from '@zeit-ui/react';
import ReactPlayer from 'react-player';
import { sendFile } from '../reduxStore/actions/fileActions';
import VideoUpload from './components/video/VideoUpload';
import axios from 'axios';

class Upload extends Component {

  constructor(props) {
    super(props);
    this.state ={
      percentCompleted: 0
    };
  }

  componentDidMount() {
    // window.scrollTo(0, 0);
  }

  uploadFile = (fileData) => {
    // this.props.sendFile(fileData);
    if(!fileData) {
      console.log("No file present");

    } else {
      const options = {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: (progressEvent) => {
          let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          this.setState({ percentCompleted: percentCompleted });
        }
      }

      axios.post('/api/file/uploadLarge', fileData, options).then(res => {
        console.log(res.data);
        // dispatch({ type: ACTIONS.SEND_FILE_SUCCESS });
        this.setState({ percentCompleted: 0 });

      }).catch(err => {
        console.log(err.response);
        console.error(err);
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ margin: '30px auto', width: '60%' }}>
          <h1 style={{marginBottom: '40px'}}>Video Streaming</h1>

          <div className='player-wrapper' style={{width: '700px', margin: '40px 10px'}}>
            <ReactPlayer
              url='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/video-1592721820177.mp4'
              className='react-player'
              playing
              controls
              light='https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/profile_pic.jpeg'
              width='100%'
              config={
                {
                  file: {
                    attributes: {
                      controlsList: 'nodownload'
                    }
                  }
                }
              }
            />
          </div>
          <div style={{width: '800px', margin: '40px 20px'}}>
            <VideoUpload uploadFile={this.uploadFile} />
            <Progress value={this.state.percentCompleted} type='success' />
          </div>
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
    sendFile: (fileData) => {
      dispatch(sendFile(fileData));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
