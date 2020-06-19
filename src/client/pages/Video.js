import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { sendFile } from '../reduxStore/actions/fileActions';
import { Grid } from '@zeit-ui/react';
import ReactPlayer from 'react-player';

class Upload extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ margin: '30px auto', width: '60%' }}>
          <h1 style={{marginBottom: '40px'}}>Video Streaming</h1>
          <Grid.Container gap={2} justify="center">
            <Grid xs={24} md={16}>
              <div className='player-wrapper' style={{width: '700px'}}>
                <ReactPlayer
                  url='https://learners-deck-17-255.sgp1.cdn.digitaloceanspaces.com/vokoscreen-2020-03-27-22-30-03.mp4'
                  className='react-player'
                  playing
                  controls
                  light='https://learners-deck-17-255.sgp1.cdn.digitaloceanspaces.com/profile_pic.jpeg'
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
            </Grid>
          </Grid.Container>
        </div>
      </React.Fragment>
    )
  }
}

// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {
//     fileError: state.file.fileError,
//     fileSent: state.file.fileSent
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendFile: (imageData) => {
//       dispatch(sendFile(imageData));
//     }
//   }
// }

export default Upload;
