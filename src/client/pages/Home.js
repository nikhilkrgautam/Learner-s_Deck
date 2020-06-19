import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../reduxStore/actions/dataActions';
import { toastHOC } from '../hoc/toast';
import { compose } from 'redux';

class Home extends Component {

  componentDidMount() {
    if(!this.props.userData) {
      this.props.getData();
      setTimeout(() => {
        this.props.toastify();
      }, 2000);
    }
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        {
          this.props.userData ? (
            <h2>Welcome {this.props.userData.username}</h2>
          ) : null
        }
      </React.Fragment>
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
    getData: () => {
      dispatch(getData());
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  toastHOC
)(Home);
