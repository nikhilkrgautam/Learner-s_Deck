import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../reduxStore/actions/dataActions';
import { toastHOC } from '../hoc/toast';
import { compose } from 'redux';
import { Collapse, Text } from '@zeit-ui/react';
import AllVideos from './components/courses/AllVideos2';

class Dashboard extends Component {

  componentDidMount() {
    if(!this.props.userData) {
      this.props.getUserData();
      setTimeout(() => {
        this.props.toastify();
      }, 2000);
      this.props.ReactGA.pageview(this.props.firstLocation.pathname);
      {this.props.history.push(this.props.firstLocation)}
    }
    window.scrollTo(0, 0);
  }

  render() {
    const {windowSize} = this.props;
    let pageWidth;
    if(windowSize === 'sm' || windowSize === 'xs') {
      pageWidth = '100%';
    } else {
      pageWidth = '80%';
    }

    let nameUser;
    if(this.props.userData) {
      if(windowSize === 'sm' || windowSize === 'xs') {
        nameUser = (<Text h2 style={{fontSize: '30px'}}>Welcome {this.props.userData.username}</Text>);
      } else {
        nameUser = (<h2>Welcome {this.props.userData.username}</h2>);
      }
    } else {
      nameUser = null;
    }


    return (
      <div style={{ padding: '40px 5px 60px' }}>
        <div style={{ margin: '10px auto', width: pageWidth }}>
          {
             nameUser
          }
          {/*<Collapse.Group>
            <Collapse title="What is eBuzzet?">
              <Text>eBuzzet is an online education platform that promises to provide high quality education to the students of India at an affordable cost.</Text>
            </Collapse>
            <Collapse title="How to use eBuzzet?">
              <Text>You can access all the videos below. Or if you want to see all the structured courses you can click on the 'Courses' tab on the navbar.<br/>
              You can also edit your profile to get better recommendations in the profile section which you can visit by clicking on the 'Profile' tab in the navbar.
              </Text>
            </Collapse>
          </Collapse.Group>*/}
          <AllVideos windowSize={this.props.windowSize} />
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => {
      dispatch(getUserData());
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  toastHOC
)(Dashboard);
