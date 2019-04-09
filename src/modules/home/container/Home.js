import React from "react";
import { connect } from "react-redux";
import Home from "../components/Home";
import { userDetail } from "../store/actions";

const HomeContainer = props => (
  <Home
    {...props}
    detail={payload => {
      props.detail(payload);
    }}
  />
);

const mapDispatchToProps = dispatch => {
  return {
    detail: payload => dispatch(userDetail(payload))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer);
