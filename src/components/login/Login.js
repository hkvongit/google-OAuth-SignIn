import React, { Component } from "react";
import styled from "styled-components";
import { LOGIN, LOGOUT } from "../../actions";
import { connect } from "react-redux";
class Login extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "239888486617-nebtq2aclk9bv3otvm4o23lv6oliol19.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.OnAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.OnAuthChange);
        });
    });
  }
  componentDidUpdate() {
    console.log(`loginState is ${this.props.loginState}`);
  }
  OnAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.onLogInClick();
    } else {
      this.props.onLogOutClick();
    }
  };
  OnSignOut = () => {
    this.auth.signOut();
  };
  OnSignIn = () => {
    this.auth.signIn();
  };
  render() {
    return (
      <div>
        {this.props.loginState && (
          <button className="btn btn-danger" color="green" onClick={this.OnSignOut}>
            Logout
          </button>
        )}
        {!this.props.loginState && (
          <button className="btn btn-success" color="red" onClick={this.OnSignIn}>
            Sign In with Google
          </button>
        )}
      </div>
    );
  }
}

const Button = styled.button`
  background-color: ${props => props.color};
  color: white;
`;

const MapStateToProps = state => {
  return { loginState: state };
};

const MapDispatchToProps = dispatch => {
  return {
    onLogInClick: () => dispatch({ type: LOGIN }),
    onLogOutClick: () => dispatch({ type: LOGOUT })
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Login);
