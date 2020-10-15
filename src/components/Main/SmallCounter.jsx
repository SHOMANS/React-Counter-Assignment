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
    const { counter, name, countingInc, countingDec } = this.props;

    return (
      <div className="SmallCounter">
        <span
          className={counter === 0 ? "zero" : "smallCounter"}
          onChange={this.reset}
        >
          {counter || "Zero"}
        </span>
        <button className="inc" onClick={countingInc} name={name}>
          <FontAwesomeIcon icon="plus-circle" className="icon" />
        </button>
        <button
          className="dec"
          onClick={countingDec}
          name={name}
          disabled={counter === 0}
        >
          <FontAwesomeIcon icon="minus-circle" className="icon" />
        </button>
      </div>
    );
  }
}

export default SmallCounter;
