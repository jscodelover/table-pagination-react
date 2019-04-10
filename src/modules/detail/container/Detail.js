import React from "react";
import { connect } from "react-redux";
import Detail from "../components/Detail";

const DetailContainer = props => <Detail {...props} />;

const mapStateToProps = ({ home }) => ({ detail: home.detail });

export default connect(mapStateToProps)(DetailContainer);
