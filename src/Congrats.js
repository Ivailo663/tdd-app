import React from "react";
import PropTypes from "prop-types";
const Congrats = (props) => {
  //   let arr = new Promise(() => {});
  //   console.log(arr.constructor === Promise);
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the world!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
