import React, { Component, Fragment } from 'react';
import { Row, Col, Text, Button, Link, Card, Tooltip } from '@zeit-ui/react';
import { Link as RouterLink } from 'react-router-dom';
// import { compose } from 'redux';
import { connect } from 'react-redux';
import { getCoursesData } from '../../../reduxStore/actions/dataActions';

class Physics extends Component {

  componentDidMount() {
    if(!this.props.coursesData) {
      this.props.getCoursesData({subject: 'Physics'});
    }
  }

  render() {
    const {coursesData, courseLoading, windowSize} = this.props;
    // console.log(coursesData);

    let physicsCourses;
    if(coursesData) {
      if(coursesData.physics) {
        if(windowSize === 'sm' || windowSize === 'xs') {

          physicsCourses = coursesData.physics.map(course => {
            return (
              <Row justify="center" align="middle" style={{ margin: '15px 5px', padding: '0' }} key={course.course_id}>
                <Card width="100%" style={{maxWidth: '530px'}}>
                  <img width='100%' height='250px' style={{ objectFit: 'cover', display: 'block'}} src={course.thumbnail}/>
                  <Row align="middle" >
                    <Tooltip text={course.title} trigger="click" type="success">
                      <Text style={{fontSize: '20px', margin: '10px 0', lineHeight: '25px'}}>{course.title.slice(0,24) + '...'}</Text>
                    </Tooltip>
                  </Row>
                  <Text type="secondary" style={{fontSize: '18px', margin: '0'}}>{course.username}</Text>
                  <Row align="middle" >
                    <Tooltip text={course.description} trigger="click" type="success">
                      <Text type="success" style={{fontSize: '16px', margin: '6px 0 0', lineHeight: '20px'}}>
                        {course.description.slice(0,50) + '...'}
                      </Text>
                    </Tooltip>
                  </Row>
                  <Row align="middle" justify="space-between" style={{margin: '10px 0 0'}}>
                    <Text style={{fontSize: '18px', marginTop: '8px', lineHeight: '20px', color: '#7928CA'}}>Class: {course.class}</Text>
                    <RouterLink to={'/courses/' + course.course_id}>
                      <Link>
                        <Button size="small" type="success" style={{fontSize: '18px', padding: '2px 5px', height: '100%', borderRadius: '10px'}} >View Course</Button>
                      </Link>
                    </RouterLink>
                  </Row>
                </Card>
              </Row>
            )
          });
        } else {

          physicsCourses = coursesData.physics.map(course => {
            return (
              <Col span={this.props.windowSize === 'md' ? 8 : 7} align="space-between" style={{ margin: '5px', padding: '0' }} key={course.course_id}>
                <Card width="100%" >
                  <img width='100%' height='250px' style={{ objectFit: 'cover', display: 'block'}} src={course.thumbnail}/>
                  <Row align="middle" >
                    <Tooltip text={course.title} type="success">
                      <Text style={{fontSize: '20px', margin: '10px 0', lineHeight: '25px'}}>{course.title.slice(0,24) + '...'}</Text>
                    </Tooltip>
                  </Row>
                  <Text type="secondary" style={{fontSize: '18px', margin: '0'}}>{course.username}</Text>
                  <Row align="middle" >
                    <Tooltip text={course.description} type="success">
                      <Text type="success" style={{fontSize: '16px', margin: '6px 0 0', lineHeight: '20px'}}>
                        {course.description.slice(0,50) + '...'}
                      </Text>
                    </Tooltip>
                  </Row>
                  <Row align="middle" justify="space-between" style={{margin: '10px 0 0'}}>
                    <Text style={{fontSize: '18px', marginTop: '8px', lineHeight: '20px', color: '#7928CA'}}>Class: {course.class}</Text>
                    <RouterLink to={'/courses/' + course.course_id}>
                      <Link>
                        <Button size="small" type="success" style={{fontSize: '18px', padding: '2px 5px', height: '100%', borderRadius: '10px'}} >View Course</Button>
                      </Link>
                    </RouterLink>
                  </Row>
                </Card>
              </Col>
            )
          });
        }
      } else {
        physicsCourses = null;
      }
    } else {
      physicsCourses = null;
    }

    let alignment;
    if(windowSize === 'sm' || windowSize === 'xs') {

      alignment = (
        <Fragment>
          { courseLoading ? (<div className='loader'>Loading...</div>) : physicsCourses }
        </Fragment>
      );
    } else {

      alignment = (
        <Row justify="space-between" align="middle" style={{ margin: '20px 10px', backgroundColor: '#FFF', minHeight: '300px' }}>
          { courseLoading ? (<div className='loader'>Loading...</div>) : physicsCourses }
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
    coursesData: state.course.coursesData,
    courseLoading: state.course.courseLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCoursesData: (subData) => {
      dispatch(getCoursesData(subData));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Physics);
