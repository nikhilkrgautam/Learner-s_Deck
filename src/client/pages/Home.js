import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../reduxStore/actions/dataActions';

class Home extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props);
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
