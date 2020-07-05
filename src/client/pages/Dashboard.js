import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../reduxStore/actions/dataActions';
import { toastHOC } from '../hoc/toast';
import { compose } from 'redux';
import { Collapse, Text } from '@zeit-ui/react';

class Dashboard extends Component {

  componentDidMount() {
    if(!this.props.userData) {
      this.props.getUserData();
      setTimeout(() => {
        this.props.toastify();
      }, 2000);
    }
    // window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={{ padding: '60px 5px' }}>
        <div style={{ margin: '10px auto', width: '80%' }}>
          <h1>Home</h1>
          {
            this.props.userData ? (
              <h2>Welcome {this.props.userData.username}</h2>
            ) : null
          }
          <Collapse.Group>
            <Collapse title="What is eBuzzet?">
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Collapse>
            <Collapse title="How to use eBuzzet?">
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Collapse>
          </Collapse.Group>
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
