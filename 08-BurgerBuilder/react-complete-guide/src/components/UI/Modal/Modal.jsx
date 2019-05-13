import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[Modal] Did Updated");
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            opacity: this.props.show ? "1" : "0",
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
