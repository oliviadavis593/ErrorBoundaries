import React, { Component } from "react";

class Currency extends Component {
  render() {
    const money = new Intl.NumberFormat(this.props.locale, {
      style: "currency",
      currency: this.props.currency
    }).format(this.props.value);
    return <div className="currency">{money}</div>;
  }
}

export default Currency;

//Creating Error Boundaries (#2)
//Added basic component code
//In the render: declared a const named money that uses Intl.NumberFormat object tp create a currency amount
//Then disaplyed this money in the JSX output
//Currency.js ===> App.js
