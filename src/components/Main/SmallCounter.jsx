import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faPlusCircle, faMinusCircle);

// function updateState(text) {
//   this.setState({ itemCounter });
// }

class SmallCounter extends React.Component {
  // state = {
  //   itemCounter: this.props.counter,
  //   enabling: false,
  //   hiding: true,
  // };

  // counterInc = () => {
  //   if (this.props.counter === 0) {
  //     this.forceUpdate();
  //     this.setState(() => {
  //       return {
  //         itemCounter: this.props.counter,
  //         enabling: true,
  //         hiding: false,
  //       };
  //     });
  //   }
  //   this.setState((prevState) => {
  //     return {
  //       itemCounter: prevState.itemCounter + 1,
  //       enabling: true,
  //       hiding: false,
  //     };
  //   });
  // };

  // counterDec = () => {
  //   this.setState((prevState) => {
  //     if (prevState.itemCounter > 0) {
  //       if (prevState.itemCounter === 1) {
  //         return { itemCounter: prevState.itemCounter - 1, hiding: true };
  //       }
  //       return { itemCounter: prevState.itemCounter - 1 };
  //     }
  //     return { enabling: false, hiding: true };
  //   });
  // };

  // reset() {
  //   this.setState(() => {
  //     return { itemCounter: 0 };
  //   });
  // }

  // getSnapshotBeforeUpdate(prevProps) {
  //   if (prevProps.counter === 0) {
  //     console.log("state has changed.");
  //     this.setState({
  //       itemCounter: 0,
  //     });
  //   }
  // }

  // updateState = updateState.bind(this);

  render() {
    // const { enabling, hiding } = this.state;
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
