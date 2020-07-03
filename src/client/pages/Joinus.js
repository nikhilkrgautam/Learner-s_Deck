import React, { Component } from 'react';
import JoinusForm from './components/forms/JoinusForm';
import { connect } from 'react-redux';
import { joinUser } from '../reduxStore/actions/joinActions';
import { Note } from '@zeit-ui/react';

class Joinus extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  joinUser = (cred) => {
    this.props.joinUser(cred);
    // console.log(cred);
  }

  render() {
    const { joinError, joined } = this.props;
    return (
      <React.Fragment>
        <div style={{ padding: '70px 5px' }}>
          <div style={{ margin: '10px auto', width: '80%' }}>
             <h1 style={{ margin: '60px 0' }}>
               Wanna join? Submit your email!
             </h1>
               {
                 joined ? (
                   <Note type="success">Thanks for joining us. You will receive an invitation mail soon.</Note>
                 ) : (
                   <JoinusForm joinUser={this.joinUser} />
                 )
               }
               {
                 joinError ? (
                   <Note type="error">{ joinError }</Note>
                 ) : null
               }
            </div>
         </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    joinError: state.join.joinError,
    joined: state.join.joined
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    joinUser: (cred) => {
      dispatch(joinUser(cred));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Joinus);
