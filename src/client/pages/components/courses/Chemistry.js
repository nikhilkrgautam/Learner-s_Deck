import React, { Component, Fragment } from 'react';
import { Row, Col, Text, Button, Image, Link, Card, Tooltip } from '@zeit-ui/react';
// import { compose } from 'redux';
import { connect } from 'react-redux';
import { getCoursesData } from '../../../reduxStore/actions/dataActions';

class Chemistry extends Component {

  componentDidMount() {
    if(!this.props.courseData.chemistry) {
      this.props.getCoursesData({subject: 'Chemistry'});
    }
  }

  render() {
    const {courseData, courseLoading, windowSize} = this.props;
    // console.log(courseData);

    let chemistryCourses;
    if(courseData) {
      if(courseData.chemistry) {
        if(windowSize === 'sm' || windowSize === 'xs') {

          chemistryCourses = courseData.chemistry.map(course => {
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
                  <Text style={{fontSize: '18px', marginTop: '8px', lineHeight: '20px', color: '#7928CA'}}>Class: {course.class}</Text>
                </Card>
              </Row>
            )
          });
        } else {

          chemistryCourses = courseData.chemistry.map(course => {
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
                  <Text style={{fontSize: '18px', marginTop: '8px', lineHeight: '20px', color: '#7928CA'}}>Class: {course.class}</Text>
                </Card>
              </Col>
            )
          });
        }

      } else {
        chemistryCourses = null;
      }
    } else {
      chemistryCourses = null;
    }

    let alignment;
    if(windowSize === 'sm' || windowSize === 'xs') {

      alignment = (
        <Fragment>
          { courseLoading ? (<div className='loader'>Loading...</div>) : chemistryCourses }
        </Fragment>
      );
    } else {

      alignment = (
        <Row justify="space-between" align="middle" style={{ margin: '20px 10px', backgroundColor: '#FFF', minHeight: '300px' }}>
          { courseLoading ? (<div className='loader'>Loading...</div>) : chemistryCourses }
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
    courseData: state.course.courseData,
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

export default connect(mapStateToProps, mapDispatchToProps)(Chemistry);
