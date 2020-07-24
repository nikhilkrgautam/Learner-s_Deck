import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import { Row, Col, Text, Button, Link, Card, Tooltip } from '@zeit-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { getVideoData, clearVideo } from '../reduxStore/actions/dataActions';

class VideoPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    const video_id = this.props.match.params.video_id;
    this.props.getVideoData({video_id: video_id});
    this.props.ReactGA.set({ page: this.props.location.pathname });
    this.props.ReactGA.pageview(this.props.location.pathname);
  }

  componentWillUnmount = () => {
    this.props.clearVideo();
  };

  render() {
    const {videoData, videosLoading, windowSize} = this.props;

    let video;
    if(videoData) {
      video = (
        <div>
          <Text h1>{videoData.title}</Text>
          <Text h3>{videoData.description}</Text>
          <div className='player-wrapper' style={{width: '100%', height: '500px', margin: '40px 10px'}}>
            <ReactPlayer
              url={videoData.video_link}
              className='react-player'
              playing
              controls
              light={videoData.thumbnail}
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
        </div>

      );
    }
    else {
      video = null
    }

    return (
      <React.Fragment>
        <Row justify="center" align="middle" style={{ margin: '15px 5px', padding: '0' }} >
          <Col span={16}>
            {video}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    videoData: state.course.videoData,
    videosLoading: state.course.videosLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVideoData: (videoData) => {
      dispatch(getVideoData(videoData));
    },
    clearVideo: () => {
      dispatch(clearVideo());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
