import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

// This could be a functional component, doesn't have to be a class.
class OrderSummary extends React.Component {
  // Just for debugging.
  componentDidUpdate(prevProps, prevState) {
    console.log("[Order SUmmary] Did Updated");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul> {ingredientSummary} </ul>
        <p>
          <strong>Total price: {this.props.totalPrice.toFixed(2)} </strong>
        </p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
