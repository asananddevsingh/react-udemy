import React, { Component } from "react";
import axios from "../../../axios-orders";

import classes from "./ContactData.css";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      cutomer: {
        name: "Anand Dev Singh",
        address: {
          street: "B-15, KV",
          zipCode: "123456",
          country: "India"
        },
        email: "anand@dev.com"
      },
      deliveryMethod: "Fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form action="">
        <input
          type="text"
          className={classes.Input}
          name="name"
          placeholder="Your Name"
        />
        <input
          type="text"
          className={classes.Input}
          name="email"
          placeholder="Your Email"
        />
        <input
          type="text"
          className={classes.Input}
          name="street"
          placeholder="Your Street"
        />
        <input
          type="text"
          className={classes.Input}
          name="postalCode"
          placeholder="Your Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;