import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { signUp } from "../../actions/session_actions";

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Sign Up",
  formTitle: "Create your account",
  formState: {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  },
  otherText: "Already have an account?",
  otherForm: <Link to="/login">Log in</Link>
});

const mDTP = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signUp(user))
});

export default connect(mSTP, mDTP)(SessionForm);