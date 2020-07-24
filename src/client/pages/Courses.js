import React, { Component, Fragment } from 'react';
import { Row, Col, Text, Button, Image, Link, Tabs } from '@zeit-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { compose } from 'redux';
import Physics from './components/courses/Physics';
import Maths from './components/courses/Maths';
import Chemistry from './components/courses/Chemistry';

class Courses extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.ReactGA.set({ page: this.props.location.pathname });
    this.props.ReactGA.pageview(this.props.location.pathname);
  }

  render() {

    let mainTab;

    // Top tabs
    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      mainTab = (
        <Fragment>
          <Row justify="center" style={{ minHeight: '850px' }}>
            <Col span={24}>
              <Tabs initialValue="1" className='courseTabs' style={{margin: '50px 10px 40px'}}>
                <Tabs.Item label="Physics" value="1">
                  <Physics windowSize={this.props.windowSize} />
                </Tabs.Item>
                <Tabs.Item label="Chemistry" value="2">
                  <Chemistry windowSize={this.props.windowSize} />
                </Tabs.Item>
                <Tabs.Item label="Maths" value="3">
                  <Maths windowSize={this.props.windowSize} />
                </Tabs.Item>
              </Tabs>
            </Col>
          </Row>
        </Fragment>
      );
    } else {
      mainTab = (
        <Fragment>
          <Row justify="center" style={{ minHeight: '850px' }}>
            <Col span={this.props.windowSize === "md" ? 22 : 20}>
              <Tabs initialValue="1" className='courseTabs' style={{margin: '30px 10px 40px'}}>
                <Tabs.Item label="Physics" value="1">
                  <Physics windowSize={this.props.windowSize} />
                </Tabs.Item>
                <Tabs.Item label="Chemistry" value="2">
                  <Chemistry windowSize={this.props.windowSize} />
                </Tabs.Item>
                <Tabs.Item label="Maths" value="3">
                  <Maths windowSize={this.props.windowSize} />
                </Tabs.Item>
              </Tabs>
            </Col>
          </Row>
        </Fragment>
      );
    }

    return (
      <div>

        {mainTab}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    userData: state.data.userData
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//
//   }
// }

export default connect(mapStateToProps)(Courses);
