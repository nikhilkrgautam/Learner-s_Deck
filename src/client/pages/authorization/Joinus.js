import React, { Component } from 'react';
import JoinusForm from '../components/forms/JoinusForm';
import { connect } from 'react-redux';
import { joinUser } from '../../reduxStore/actions/joinActions';
import { Note, Text } from '@zeit-ui/react';

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

    let pageHeading;
    if(this.props.windowSize === 'sm' || this.props.windowSize === 'xs') {
      pageHeading = (
        <Text h3 style={{ fontSize: '40px'}}>
          Wanna join? Submit your email!
        </Text>
      );
    } else {
      pageHeading = (
        <Text h3 style={{ fontSize: '50px'}}>
          Wanna join? Submit your email!
        </Text>
      );
    }

    return (
      <React.Fragment>
        <div style={{ padding: '70px 5px' }}>
          <div style={{ margin: '10px auto', width: '80%' }}>
             {pageHeading}
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
