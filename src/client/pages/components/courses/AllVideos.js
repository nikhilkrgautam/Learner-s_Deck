import React, { Component, Fragment } from 'react';
import { Row, Col, Text, Button, Link, Select, Tooltip } from '@zeit-ui/react';
import { Link as RouterLink } from 'react-router-dom';
// import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAllVideos } from '../../../reduxStore/actions/dataActions';

class AllVideos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subject: null
    };
  }

  componentDidMount() {
    const {allVideosData} = this.props;
    if(!allVideosData) {
      this.props.getAllVideos();
    }
  }

  handleSubject = (val) => {
    // console.log(val);
    if(val === 'all') {
      this.setState({subject: null});
    }
    else {
      this.setState({subject: val});
    }

  }

  render() {
    const {allVideosData, videosLoading, windowSize} = this.props;
    console.log(this.state.subject);
    console.log(allVideosData);

    let filter;
    if(windowSize === 'sm' || windowSize === 'xs') {
      filter = (
        <Fragment>
          <Select placeholder="Choose subject" onChange={this.handleSubject}>
            <Select.Option value="Physics">Physics</Select.Option>
            <Select.Option value="Chemistry">Chemistry</Select.Option>
            <Select.Option value="Maths">Maths</Select.Option>
            <Select.Option value="all">All</Select.Option>
          </Select>
        </Fragment>
      );
    } else {
      filter = (
        <Fragment>
          <Select placeholder="Choose subject" size="large" onChange={this.handleSubject}>
            <Select.Option value="Physics">Physics</Select.Option>
            <Select.Option value="Chemistry">Chemistry</Select.Option>
            <Select.Option value="Maths">Maths</Select.Option>
            <Select.Option value="all">All</Select.Option>
          </Select>
        </Fragment>
      );
    }

    let videoList;
    if(allVideosData) {
      if(windowSize === 'sm' || windowSize === 'xs') {
        if(allVideosData[0].title) {

          videoList = allVideosData.map(video => {
            if(this.state.subject) {
              if(video.subject === this.state.subject) {
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
              }
              else {
                return null;
              }
            }
            else {
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
            }

          });

        } else {
          videoList = null;
        }

      } else {
        if(allVideosData[0].title) {

          videoList = allVideosData.map(video => {
            if(this.state.subject) {
              if(video.subject === this.state.subject) {
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
              }
              else {
                return null;
              }
            }
            else {
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
            }
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

    let pageHeading;
    if(windowSize === 'sm' || windowSize === 'xs') {
      pageHeading = (
        <Fragment>
          <Row align="middle" style={{ margin: '15px 10px 10px' }}>
            <Text style={{fontSize: '30px', margin: '0'}}>Free videos:</Text>
          </Row>
          <Row align="middle" style={{ margin: '15px 10px 10px' }}>
            {filter}
          </Row>
        </Fragment>
      );
    } else {

      pageHeading = (
        <Fragment>
          <Row align="middle" style={{ margin: '20px 10px' }}>
            <Text style={{fontSize: '45px', margin: '0'}}>Free videos:</Text>
          </Row>
          <Row align="middle" style={{ margin: '15px 10px 10px' }}>
            {filter}
          </Row>
        </Fragment>
      );
    }

    return (
      <Fragment>
        { pageHeading }
        { alignment }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    allVideosData: state.course.allVideos,
    videosLoading: state.course.videosLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllVideos: () => {
      dispatch(getAllVideos());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllVideos);
