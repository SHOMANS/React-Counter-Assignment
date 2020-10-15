import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faPlusCircle, faMinusCircle);

// function updateState(text) {
//   this.setState({ itemCounter });
// }

class SmallCounter extends React.Component {
  render() {
    const { counter } = this.props;

    return (
      <div className="SmallCounter">
        <span className="zero" hidden={counter !== 0}>
          Zero
        </span>
        <span
          className="smallCounter"
          hidden={counter === 0}
          onChange={this.reset}
        >
          {counter}
        </span>
        <button
          className="inc"
          onClick={() => {
            this.props.countingInc();
            // this.counterInc();
          }}
        >
          <FontAwesomeIcon icon="plus-circle" className="icon" />
        </button>
        <button
          className="dec"
          onClick={() => {
            this.props.countingDec();
            // this.counterDec();
          }}
          disabled={counter === 0}
        >
          <FontAwesomeIcon icon="minus-circle" className="icon" />
        </button>
      </div>
    );
  }
}

export default SmallCounter;
