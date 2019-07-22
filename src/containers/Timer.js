import React from "react";
import IsroCarausel from "../components/Carausel";
import Isroclock from "../components/Isroclock";
import Dd1live from "../components/Dd1live";
import { connect } from "react-redux";
import { getTimeStamp } from "../store/cms/action";
class Timer extends React.Component {
  render() {
    return (
      <div>
        <Isroclock timeLeftInSeconds={this.props.timeLeftInSeconds} />
        {this.props.startBroadCast ? <Dd1live /> : <IsroCarausel />}
      </div>
    );
  }
  componentDidMount() {
    this.props.getTimeStamp();
  }
}

const mapStateToProps = state => {
  return {
    timeLeftInSeconds: state.cms.timeLeftInSeconds,
    startBroadCast: state.cms.startBroadCast
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTimeStamp: () => dispatch(getTimeStamp())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
