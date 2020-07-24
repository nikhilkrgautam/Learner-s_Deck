import React, { Component, Fragment } from 'react';
import { Row, Col, Text, Button, Image, Link, Tabs, Breadcrumbs } from '@zeit-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourseData } from '../reduxStore/actions/dataActions';
// import { compose } from 'redux';
import CourseVideos from './components/courses/CourseVideos';

class Courses extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    const course_id = this.props.match.params.course_id;
    this.props.getCourseData({course_id: course_id});
    this.props.ReactGA.set({ page: this.props.location.pathname });
    this.props.ReactGA.pageview(this.props.location.pathname);
  }

  render() {
    const {courseData, courseLoading} = this.props;
    const course_id = this.props.match.params.course_id;

    let mainTab;
    // Top tabs

    if(courseData) {

      if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {

        mainTab = (
          <Fragment>
            <Row align="middle" style={{ minHeight: '60px', padding: '50px 30px 10px' }}>
              <Breadcrumbs>
                <RouterLink to="/courses">
                  <Breadcrumbs.Item nextLink>Courses</Breadcrumbs.Item>
                </RouterLink>
                <Breadcrumbs.Item>{courseData.subject}</Breadcrumbs.Item>
              </Breadcrumbs>
            </Row>
            <Row justify="center" style={{ minHeight: '1700px' }}>
              <Col span={22}>
                <Row justify="center" align="middle" style={{ height: '100%', maxHeight: '375px' }}>
                  <img width='100%' height='100%' style={{maxWidth: '670px', padding: '30px 0', objectFit: 'cover'}} src={courseData.thumbnail} />
                </Row>
                <Row justify="center" align="middle" style={{ }}>
                  <Col style={{margin: '10px 0 10px 20px'}}>
                    <Text h3 style={{ fontSize: '35px', lineHeight: '45px'}}>{courseData.title}</Text>
                    <Text style={{ fontSize: '25px', lineHeight: '30px', margin: '10px 0'}}>{courseData.description}</Text>
                    <Text style={{ color: '#333', fontSize: '20px', margin: '10px 0'}}>Taught by: {courseData.username}</Text>
                    <Text style={{ fontSize: '20px', margin: '10px 0 20px'}}>Class: {courseData.class}</Text>
                  </Col>
                </Row>
                <Row justify="center" style={{ minHeight: '200px', padding: '10px 5px 80px' }}>
                  <Col span={24}>
                    <Tabs initialValue="1" className='courseTabs' style={{margin: '30px 10px 30px'}}>
                      <Tabs.Item label="Lectures" value="1">
                        <CourseVideos windowSize={this.props.windowSize} courseId={course_id} />
                      </Tabs.Item>
                      <Tabs.Item label="Quizes" value="2">
                        Quiz
                      </Tabs.Item>
                      <Tabs.Item label="Tests" value="3">
                        Test
                      </Tabs.Item>
                    </Tabs>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Fragment>
        );
      } else {

        mainTab = (
          <Fragment>
            <Row align="middle" style={{ minHeight: '80px', padding: '20px 30px 10px' }}>
              <Breadcrumbs>
                <RouterLink to="/courses">
                  <Breadcrumbs.Item nextLink>Courses</Breadcrumbs.Item>
                </RouterLink>
                <Breadcrumbs.Item>{courseData.subject}</Breadcrumbs.Item>
              </Breadcrumbs>
            </Row>
            <Row justify="center" style={{ minHeight: '550px', padding: '20px 0 20px' }}>
              <Col span={12}>
                <Row justify="center" align="middle" style={{ height: '100%' }}>
                  <img width='100%' height='100%' style={{maxWidth: '670px', padding: '30px 0', objectFit: 'cover'}} src={courseData.thumbnail} />
                </Row>
              </Col>
              <Col span={10}>
                <Row justify="center" align="middle" style={{ height: '100%' }}>
                  <Col style={{margin: '10px 0 10px 20px'}}>
                    <Text h3 style={{ fontSize: '40px', lineHeight: '65px'}}>{courseData.title}</Text>
                    <Text style={{ fontSize: '25px', lineHeight: '35px', margin: '10px 5px'}}>{courseData.description}</Text>
                    <Text style={{ color: '#333', fontSize: '22px', margin: '10px 5px'}}>Taught by: {courseData.username}</Text>
                    <Text style={{ fontSize: '22px', margin: '10px 5px 40px'}}>Class: {courseData.class}</Text>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row justify="center" style={{ minHeight: '400px', padding: '20px 5px 60px' }}>
              <Col span={this.props.windowSize === "md" ? 20 : 18}>
                <Tabs initialValue="1" className='courseTabs' style={{margin: '30px 10px 40px'}}>
                  <Tabs.Item label="Lectures" value="1">
                    <CourseVideos courseId={course_id} />
                  </Tabs.Item>
                  <Tabs.Item label="Quizes" value="2">
                    Quiz
                  </Tabs.Item>
                  <Tabs.Item label="Tests" value="3">
                    Test
                  </Tabs.Item>
                </Tabs>
              </Col>
            </Row>
          </Fragment>
        );
      }
    }
    else {
      mainTab = null;
    }

    return (
      <div>

        { courseLoading ? (<div className='loader'>Loading...</div>) : mainTab }

      </div>
    );
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
    getCourseData: (courseData) => {
      dispatch(getCourseData(courseData));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
