import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSyncAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SmallCounter from "./SmallCounter";

import "./style.css";

library.add(faSyncAlt, faShoppingCart);

class Main extends React.Component {
  state = {
    counter: 0,
    smallCounterOne: 0,
    smallCounterTwo: 0,
    smallCounterThree: 0,
    smallCounterFour: 0,
  };

  reset = () => {
    this.setState(() => {
      this.forceUpdate();
      return {
        counter: 0,
        smallCounterOne: 0,
        smallCounterTwo: 0,
        smallCounterThree: 0,
        smallCounterFour: 0,
      };
    });
  };

  // Start Counter One

  countingIncOne = () => {
    this.setState((prevState) => {
      if (prevState.smallCounterOne === 0) {
        return {
          counter: prevState.counter + 1,
          smallCounterOne: prevState.smallCounterOne + 1,
        };
      }
      return {
        smallCounterOne: prevState.smallCounterOne + 1,
      };
    });
  };

  countingDecOne = () => {
    this.setState((prevState) => {
      if (prevState.smallCounterOne > 0) {
        if (prevState.smallCounterOne === 1) {
          return {
            counter: prevState.counter - 1,
            smallCounterOne: prevState.smallCounterOne - 1,
          };
        }
      }
      return {
        smallCounterOne: prevState.smallCounterOne - 1,
      };
    });
  };

  // End Counter One

  // Start Counter Two

  countingIncTwo = () => {
    this.setState((prevState) => {
      if (prevState.smallCounterTwo === 0) {
        return {
          counter: prevState.counter + 1,
          smallCounterTwo: prevState.smallCounterTwo + 1,
        };
      }
      return {
        smallCounterTwo: prevState.smallCounterTwo + 1,
      };
    });
  };

  countingDecTwo = () => {
    this.setState((prevState) => {
      if (prevState.smallCounterTwo > 0) {
        if (prevState.smallCounterTwo === 1) {
          return {
            counter: prevState.counter - 1,
            smallCounterTwo: prevState.smallCounterTwo - 1,
          };
        }
      }
      return {
        smallCounterTwo: prevState.smallCounterTwo - 1,
      };
    });
  };

  // End Counter Two

  // Start Counter Three

  countingIncThree = () => {
    this.setState((prevState) => {
      if (prevState.smallCounterThree === 0) {
        return {
          counter: prevState.counter + 1,
          smallCounterThree: prevState.smallCounterThree + 1,
        };
      }
      return {
        smallCounterThree: prevState.smallCounterThree + 1,
      };
    });
  };

  countingDecThree = () => {
    this.setState((prevState) => {
      if (prevState.smallCounterThree > 0) {
        if (prevState.smallCounterThree === 1) {
          return {
            counter: prevState.counter - 1,
            smallCounterThree: prevState.smallCounterThree - 1,
          };
        }
      }
      return {
        smallCounterThree: prevState.smallCounterThree - 1,
      };
    });
  };

  // End Counter Three

  // Start Counter Four

  countingIncFour = () => {
    this.setState((prevState) => {
      if (prevState.smallCounterFour === 0) {
        return {
          counter: prevState.counter + 1,
          smallCounterFour: prevState.smallCounterFour + 1,
        };
      }
      return {
        smallCounterFour: prevState.smallCounterFour + 1,
      };
    });
  };

  countingDecFour = () => {
    this.setState((prevState) => {
      if (prevState.smallCounterFour > 0) {
        if (prevState.smallCounterFour === 1) {
          return {
            counter: prevState.counter - 1,
            smallCounterFour: prevState.smallCounterFour - 1,
          };
        }
      }
      return {
        smallCounterFour: prevState.smallCounterFour - 1,
      };
    });
  };

  // End Counter Four

  render() {
    const {
      counter,
      smallCounterOne,
      smallCounterTwo,
      smallCounterThree,
      smallCounterFour,
    } = this.state;
    return (
      <>
        <header className="header">
          <span className="cart-icon">
            <FontAwesomeIcon icon="shopping-cart" />
          </span>
          <span className="counter">{counter}</span>
          <span className="items">Items</span>
        </header>
        <main>
          <button className="reset-btn" onClick={this.reset}>
            <FontAwesomeIcon icon="sync-alt" />
          </button>
          <SmallCounter
            countingInc={this.countingIncOne}
            countingDec={this.countingDecOne}
            counter={smallCounterOne}
          />
          <SmallCounter
            countingInc={this.countingIncTwo}
            countingDec={this.countingDecTwo}
            counter={smallCounterTwo}
          />
          <SmallCounter
            countingInc={this.countingIncThree}
            countingDec={this.countingDecThree}
            counter={smallCounterThree}
          />
          <SmallCounter
            countingInc={this.countingIncFour}
            countingDec={this.countingDecFour}
            counter={smallCounterFour}
          />
        </main>
      </>
    );
  }
}

export default Main;
