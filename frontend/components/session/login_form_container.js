// import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Log in",
  formTitle: "Log in and let's get going",
  formState: {
    email: "",
    password: ""
  },
  otherText: "Don't have an account?",
  otherForm: <Link to="/signup">Sign up</Link>
});

const mDTP = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);