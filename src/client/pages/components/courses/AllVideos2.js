import React, { Component, Fragment } from 'react';
import { Row, Col, Text, Button, Link, Tooltip, Card } from '@zeit-ui/react';
import { Link as RouterLink } from 'react-router-dom';
// import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAllVideos } from '../../../reduxStore/actions/dataActions';

class AllVideos2 extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {allVideosData} = this.props;
    if(!allVideosData) {
      this.props.getAllVideos();
    }
  }

  render() {
    const {allVideosData, videosLoading, windowSize} = this.props;
    console.log(allVideosData);


    let physicsVideoList, mathsVideoList, chemistryVideoList;
    if(allVideosData) {
      if(windowSize === 'sm' || windowSize === 'xs') {
        if(allVideosData[0].title) {

          physicsVideoList = allVideosData.map(video => {
            if(video.subject === 'Physics') {
              return (
                <Row justify="center" align="middle" style={{ margin: '15px 5px', padding: '0' }} key={video.video_id} >
                  <Card width="100%" style={{maxWidth: '480px'}}>
                    <img width='100%' height='180px' style={{ objectFit: 'cover', display: 'block'}} src={video.thumbnail}/>
                    <Row align="middle" >
                      <Tooltip text={video.title} trigger="click" type="success">
                        <Text style={{fontSize: '20px', margin: '6px 0', lineHeight: '25px'}}>{video.title.slice(0,24) + '...'}</Text>
                      </Tooltip>
                    </Row>
                    <Row align="middle" >
                      <Tooltip text={video.description} trigger="click" type="success">
                        <Text type="success" style={{fontSize: '16px', margin: '6px 0 0', lineHeight: '20px'}}>
                          {video.description.slice(0,50) + '...'}
                        </Text>
                      </Tooltip>
                    </Row>
                    <Row align="middle" justify="space-between" style={{margin: '6px 0 0'}}>
                      <Text style={{fontSize: '18px', marginTop: '8px', lineHeight: '20px', color: '#7928CA'}}>Class: {video.class}</Text>
                      <RouterLink to={'/courses/' + video.video_id}>
                        <Link>
                          <Button size="small" type="success" style={{fontSize: '18px', padding: '2px 5px', height: '100%', borderRadius: '10px'}} >Watch</Button>
                        </Link>
                      </RouterLink>
                    </Row>
                  </Card>
                </Row>
              )
            }
            else {
              return null;
            }
          });

          chemistryVideoList = allVideosData.map(video => {
            if(video.subject === 'Chemistry') {
              return (
                <Row justify="center" align="middle" style={{ margin: '15px 5px', padding: '0' }} key={video.video_id} >
                  <Card width="100%" style={{maxWidth: '480px'}}>
                    <img width='100%' height='180px' style={{ objectFit: 'cover', display: 'block'}} src={video.thumbnail}/>
                    <Row align="middle" >
                      <Tooltip text={video.title} trigger="click" type="success">
                        <Text style={{fontSize: '20px', margin: '6px 0', lineHeight: '25px'}}>{video.title.slice(0,24) + '...'}</Text>
                      </Tooltip>
                    </Row>
                    <Row align="middle" >
                      <Tooltip text={video.description} trigger="click" type="success">
                        <Text type="success" style={{fontSize: '16px', margin: '6px 0 0', lineHeight: '20px'}}>
                          {video.description.slice(0,50) + '...'}
                        </Text>
                      </Tooltip>
                    </Row>
                    <Row align="middle" justify="space-between" style={{margin: '6px 0 0'}}>
                      <Text style={{fontSize: '18px', marginTop: '8px', lineHeight: '20px', color: '#7928CA'}}>Class: {video.class}</Text>
                      <RouterLink to={'/courses/' + video.video_id}>
                        <Link>
                          <Button size="small" type="success" style={{fontSize: '18px', padding: '2px 5px', height: '100%', borderRadius: '10px'}} >Watch</Button>
                        </Link>
                      </RouterLink>
                    </Row>
                  </Card>
                </Row>
              )
            }
            else {
              return null;
            }
          });

          mathsVideoList = allVideosData.map(video => {
            if(video.subject === 'Maths') {
              return (
                <Row justify="center" align="middle" style={{ margin: '15px 5px', padding: '0' }} key={video.video_id} >
                  <Card width="100%" style={{maxWidth: '480px'}}>
                    <img width='100%' height='180px' style={{ objectFit: 'cover', display: 'block'}} src={video.thumbnail}/>
                    <Row align="middle" >
                      <Tooltip text={video.title} trigger="click" type="success">
                        <Text style={{fontSize: '20px', margin: '6px 0', lineHeight: '25px'}}>{video.title.slice(0,24) + '...'}</Text>
                      </Tooltip>
                    </Row>
                    <Row align="middle" >
                      <Tooltip text={video.description} trigger="click" type="success">
                        <Text type="success" style={{fontSize: '16px', margin: '6px 0 0', lineHeight: '20px'}}>
                          {video.description.slice(0,50) + '...'}
                        </Text>
                      </Tooltip>
                    </Row>
                    <Row align="middle" justify="space-between" style={{margin: '6px 0 0'}}>
                      <Text style={{fontSize: '18px', marginTop: '8px', lineHeight: '20px', color: '#7928CA'}}>Class: {video.class}</Text>
                      <RouterLink to={'/courses/' + video.video_id}>
                        <Link>
                          <Button size="small" type="success" style={{fontSize: '18px', padding: '2px 5px', height: '100%', borderRadius: '10px'}} >Watch</Button>
                        </Link>
                      </RouterLink>
                    </Row>
                  </Card>
                </Row>
              )
            }
            else {
              return null;
            }
          });

        } else {
          physicsVideoList = null;
          chemistryVideoList = null;
          mathVideoList = null;
        }

      } else {
        if(allVideosData[0].title) {

          physicsVideoList = allVideosData.map(video => {
            if(video.subject === 'Physics') {
              return (
                  <Col span={10} style={{ margin: '15px 5px', padding: '0' }} key={video.video_id}>
                    <Card width="100%" style={{maxWidth: '530px'}}>
                      <img width='100%' height='250px' style={{ objectFit: 'cover', display: 'block'}} src={video.thumbnail}/>
                      <Row align="middle" >
                        <Tooltip text={video.title} type="success">
                          <Text style={{fontSize: '20px', margin: '10px 0', lineHeight: '25px'}}>{video.title.slice(0,24) + '...'}</Text>
                        </Tooltip>
                      </Row>
                      <Row align="middle" >
                        <Tooltip text={video.description} type="success">
                          <Text type="success" style={{fontSize: '16px', margin: '6px 0 0', lineHeight: '20px'}}>
                            {video.description.slice(0,50) + '...'}
                          </Text>
                        </Tooltip>
                      </Row>
                      <Row align="middle" justify="space-between" style={{margin: '10px 0 0'}}>
                        <Text style={{fontSize: '18px', marginTop: '8px', lineHeight: '20px', color: '#7928CA'}}>Class: {video.class}</Text>
                        <RouterLink to={'/courses/' + video.video_id}>
                          <Link>
                            <Button size="small" type="success" style={{fontSize: '18px', padding: '2px 5px', height: '100%', borderRadius: '10px'}} >Watch</Button>
                          </Link>
                        </RouterLink>
                      </Row>
                    </Card>
                  </Col>
              )
            }
            else {
              return null;
            }
          });

          chemistryVideoList = allVideosData.map(video => {
            if(video.subject === 'Chemistry') {
              return (
                  <Col span={10} style={{ margin: '15px 5px', padding: '0' }} key={video.video_id}>
                    <Card width="100%" style={{maxWidth: '530px'}}>
                      <img width='100%' height='250px' style={{ objectFit: 'cover', display: 'block'}} src={video.thumbnail}/>
                      <Row align="middle" >
                        <Tooltip text={video.title} type="success">
                          <Text style={{fontSize: '20px', margin: '10px 0', lineHeight: '25px'}}>{video.title.slice(0,24) + '...'}</Text>
                        </Tooltip>
                      </Row>
                      <Row align="middle" >
                        <Tooltip text={video.description} type="success">
                          <Text type="success" style={{fontSize: '16px', margin: '6px 0 0', lineHeight: '20px'}}>
                            {video.description.slice(0,50) + '...'}
                          </Text>
                        </Tooltip>
                      </Row>
                      <Row align="middle" justify="space-between" style={{margin: '10px 0 0'}}>
                        <Text style={{fontSize: '18px', marginTop: '8px', lineHeight: '20px', color: '#7928CA'}}>Class: {video.class}</Text>
                        <RouterLink to={'/courses/' + video.video_id}>
                          <Link>
                            <Button size="small" type="success" style={{fontSize: '18px', padding: '2px 5px', height: '100%', borderRadius: '10px'}} >Watch</Button>
                          </Link>
                        </RouterLink>
                      </Row>
                    </Card>
                  </Col>
              )
            }
            else {
              return null;
            }
          });

          mathsVideoList = allVideosData.map(video => {
            if(video.subject === 'Maths') {
              return (
                  <Col span={10} style={{ margin: '15px 5px', padding: '0' }} key={video.video_id}>
                    <Card width="100%" style={{maxWidth: '530px'}}>
                      <img width='100%' height='250px' style={{ objectFit: 'cover', display: 'block'}} src={video.thumbnail}/>
                      <Row align="middle" >
                        <Tooltip text={video.title} type="success">
                          <Text style={{fontSize: '20px', margin: '10px 0', lineHeight: '25px'}}>{video.title.slice(0,24) + '...'}</Text>
                        </Tooltip>
                      </Row>
                      <Row align="middle" >
                        <Tooltip text={video.description} type="success">
                          <Text type="success" style={{fontSize: '16px', margin: '6px 0 0', lineHeight: '20px'}}>
                            {video.description.slice(0,50) + '...'}
                          </Text>
                        </Tooltip>
                      </Row>
                      <Row align="middle" justify="space-between" style={{margin: '10px 0 0'}}>
                        <Text style={{fontSize: '18px', marginTop: '8px', lineHeight: '20px', color: '#7928CA'}}>Class: {video.class}</Text>
                        <RouterLink to={'/courses/' + video.video_id}>
                          <Link>
                            <Button size="small" type="success" style={{fontSize: '18px', padding: '2px 5px', height: '100%', borderRadius: '10px'}} >Watch</Button>
                          </Link>
                        </RouterLink>
                      </Row>
                    </Card>
                  </Col>
              )
            }
            else {
              return null;
            }
          });

        } else {
          physicsVideoList = null;
          chemistryVideoList = null;
          mathsVideoList = null;
        }
      }
    } else {
      physicsVideoList = null;
    }

    let physics, chemistry, maths;
    if(windowSize === 'sm' || windowSize === 'xs') {
      physics = (
        <Fragment>
          <Row align="middle" style={{ margin: '15px 10px 10px' }}>
            <Text style={{fontSize: '25px', margin: '0'}}>Physics:</Text>
          </Row>
          <Row justify="center" align="middle" style={{ margin: '10px 5px', minHeight: '200px' }}>
            <Col>
            { videosLoading ? (<div className='loader'>Loading...</div>) : physicsVideoList }
            </Col>
          </Row>
        </Fragment>
      );
      maths = (
        <Fragment>
          <Row align="middle" style={{ margin: '15px 10px 10px' }}>
            <Text style={{fontSize: '25px', margin: '0'}}>Maths:</Text>
          </Row>
          <Row justify="center" align="middle" style={{ margin: '10px 5px', minHeight: '200px' }}>
            <Col>
            { videosLoading ? (<div className='loader'>Loading...</div>) : mathsVideoList }
            </Col>
          </Row>
        </Fragment>
      );
      chemistry = (
        <Fragment>
          <Row align="middle" style={{ margin: '15px 10px 10px' }}>
            <Text style={{fontSize: '25px', margin: '0'}}>Chemistry:</Text>
          </Row>
          <Row justify="center" align="middle" style={{ margin: '10px 5px', minHeight: '200px' }}>
            <Col>
            { videosLoading ? (<div className='loader'>Loading...</div>) : chemistryVideoList }
            </Col>
          </Row>
        </Fragment>
      );
    } else {

      physics = (
        <Fragment>
          <Row align="middle" style={{ margin: '20px 10px' }}>
            <Text style={{fontSize: '45px', margin: '0'}}>Physics:</Text>
          </Row>
          <Row justify="center" align="middle" style={{ margin: '20px 10px', minHeight: '200px' }}>
            <Col>
            { videosLoading ? (<div className='loader'>Loading...</div>) : physicsVideoList }
            </Col>
          </Row>
        </Fragment>
      );
      maths = (
        <Fragment>
          <Row align="middle" style={{ margin: '20px 10px' }}>
            <Text style={{fontSize: '45px', margin: '0'}}>Maths:</Text>
          </Row>
          <Row justify="center" align="middle" style={{ margin: '20px 10px', minHeight: '200px' }}>
            <Col>
            { videosLoading ? (<div className='loader'>Loading...</div>) : mathsVideoList }
            </Col>
          </Row>
        </Fragment>
      );
      chemistry = (
        <Fragment>
          <Row align="middle" style={{ margin: '20px 10px' }}>
            <Text style={{fontSize: '45px', margin: '0'}}>Chemistry:</Text>
          </Row>
          <Row justify="center" align="middle" style={{ margin: '20px 10px', minHeight: '200px' }}>
            <Col>
            { videosLoading ? (<div className='loader'>Loading...</div>) : chemistryVideoList }
            </Col>
          </Row>
        </Fragment>
      );
    }

    return (
      <Fragment>
        { physics }
        { maths }
        { chemistry }
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

export default connect(mapStateToProps, mapDispatchToProps)(AllVideos2);
