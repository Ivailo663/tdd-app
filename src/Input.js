import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions";

class Input extends Component {
  componentDidMount() {
    // console.log(this.props.success, "?????????");
  }
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input data-test="input-box" type="text" placeholder="enter guess" />
        <button data-test="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}
const mapStateToProps = ({ success }) => {
  return {
    success,
  };
};
const actionsCreator = {
  guessWord,
};
export default connect(mapStateToProps, actionsCreator)(Input);
