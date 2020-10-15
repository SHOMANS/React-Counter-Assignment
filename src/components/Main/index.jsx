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

  counterKeys = {
    1: "smallCounterOne",
    2: "smallCounterTwo",
    3: "smallCounterThree",
    4: "smallCounterFour",
  };

  countingInc = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      if (prevState[this.counterKeys[name]] === 0) {
        return {
          counter: prevState.counter + 1,
          [this.counterKeys[name]]: prevState[this.counterKeys[name]] + 1,
        };
      }
      return {
        [this.counterKeys[name]]: prevState[this.counterKeys[name]] + 1,
      };
    });
  };

  countingDec = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      if (prevState[this.counterKeys[name]] > 0) {
        if (prevState[this.counterKeys[name]] === 1) {
          return {
            counter: prevState.counter - 1,
            [this.counterKeys[name]]: prevState[this.counterKeys[name]] - 1,
          };
        }
      }
      return {
        [this.counterKeys[name]]: prevState[this.counterKeys[name]] - 1,
      };
    });
  };

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
            countingInc={this.countingInc}
            countingDec={this.countingDec}
            counter={smallCounterOne}
            name="1"
          />
          <SmallCounter
            countingInc={this.countingInc}
            countingDec={this.countingDec}
            counter={smallCounterTwo}
            name="2"
          />
          <SmallCounter
            countingInc={this.countingInc}
            countingDec={this.countingDec}
            counter={smallCounterThree}
            name="3"
          />
          <SmallCounter
            countingInc={this.countingInc}
            countingDec={this.countingDec}
            counter={smallCounterFour}
            name="4"
          />
        </main>
      </>
    );
  }
}

export default Main;
