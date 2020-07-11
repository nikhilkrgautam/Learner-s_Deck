import React, { Component, Fragment } from 'react';
import { Row, Col, Text, Button, Link, Card, Tooltip } from '@zeit-ui/react';
import { Link as RouterLink } from 'react-router-dom';
// import { compose } from 'redux';
import { connect } from 'react-redux';
import { getVideosData } from '../../../reduxStore/actions/dataActions';

class CourseVideos extends Component {

  componentDidMount() {
    this.props.getVideosData({course_id: this.props.courseId});
  }

  render() {
    const {videosData, videosLoading, windowSize} = this.props;
    // console.log(coursesData);

    let videoList;
    if(videosData) {
      if(windowSize === 'sm' || windowSize === 'xs') {
        if(videosData[0].title) {

          videoList = videosData.map(video => {
            return (
              <Row justify="center" align="middle" style={{ margin: '15px 5px', padding: '0' }} key={video.video_id} >
                <Col style={{}}>
                  <Row justify="center">
                    <img width='100%' height='200px' style={{ padding: '10px 0', objectFit: 'cover', maxWidth: '450px'}} src={video.thumbnail} />
                  </Row>
                  <Row justify="center" style={{minHeight: '160px'}}>
                    <Col style={{maxWidth: '450px'}}>
                      <Text h3 style={{fontSize: '20px', margin: '10px 0 0'}}>{video.title}</Text>
                      <Row align="middle">
                        <Tooltip text={video.description} trigger="click" type="success">
                          <Text type="success" style={{fontSize: '16px', margin: '4px 0 0', lineHeight: '20px'}}>
                            {video.description.slice(0,50) + '...'}
                          </Text>
                        </Tooltip>
                      </Row>
                      <RouterLink to={'/videos/' + video.video_id}>
                        <Link>
                          <Button size="small" type="success" style={{fontSize: '18px', padding: '2px 5px', margin: '20px 0 0', height: '100%', borderRadius: '10px'}} >Watch</Button>
                        </Link>
                      </RouterLink>
                    </Col>
                  </Row>
                </Col>
              </Row>
            )
          });
        } else {
          videoList = null;
        }
      } else {
        if(videosData[0].title) {

          videoList = videosData.map(video => {
            return (
                <Row justify="center" align="middle" style={{ margin: '15px 5px', padding: '0' }} key={video.video_id}>
                  <Col style={{maxWidth: '350px'}}>
                    <img width='100%' height='200px' style={{ padding: '10px 0', objectFit: 'cover'}} src={video.thumbnail} />
                  </Col>
                  <Col style={{margin: '0 0 0 50px', minHeight: '120px'}}>
                    <Text h3 style={{fontSize: '20px', margin: '0'}}>{video.title}</Text>
                    <Row align="middle" >
                      <Tooltip text={video.description} type="success">
                        <Text type="success" style={{fontSize: '16px', margin: '4px 0 0', lineHeight: '20px'}}>
                          {video.description.slice(0,50) + '...'}
                        </Text>
                      </Tooltip>
                    </Row>
                    <RouterLink to={'/videos/' + video.video_id}>
                      <Link>
                        <Button size="small" type="success" style={{fontSize: '18px', padding: '2px 5px', margin: '20px 0 0', height: '100%', borderRadius: '10px'}} >Watch</Button>
                      </Link>
                    </RouterLink>
                  </Col>
                </Row>
            )
          });
        } else {
          videoList = null;
        }
      }
    } else {
      videoList = null;
    }

    let alignment;
    if(windowSize === 'sm' || windowSize === 'xs') {
      alignment = (
        <Row justify="center" align="middle" style={{ margin: '10px 5px', minHeight: '200px' }}>
          <Col>
          { videosLoading ? (<div className='loader'>Loading...</div>) : videoList }
          </Col>
        </Row>
      );
    } else {

      alignment = (
        <Row justify="center" align="middle" style={{ margin: '20px 10px', minHeight: '200px' }}>
          <Col>
          { videosLoading ? (<div className='loader'>Loading...</div>) : videoList }
          </Col>
        </Row>
      );
    }

    return (
      <Fragment>
        { alignment }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    videosData: state.course.videosData,
    videosLoading: state.course.videosLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVideosData: (videosData) => {
      dispatch(getVideosData(videosData));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseVideos);
