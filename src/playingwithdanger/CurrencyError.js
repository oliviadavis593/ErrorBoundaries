import React, { Component } from "react";

class CurrencyError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Could not display this currency</h2>;
    }
    return this.props.children;
  }
}

export default CurrencyError;

//Creating Error Boundaries (#5)
//1st step:
//Created a class component
//Add initial state with a single property (hasError) which defaults to false
//Used hasError to conditionally render an error UI
//If true = means an error has occured & we should display the error UI
//otherwise = just display the normal children

//2nd step:
//Added the getDerivedStateFromError() method
//We ser hasError to true
//3rd step:
//Finally in render method conditionally rendered an error message if hasError is true
//Otherwise display the children as normal
//CurrencyError.js ===> App.js
