import React, { Component } from "react";
import Currency from "./Currency";
import CurrencyError from "./CurrencyError";

class App extends Component {
  render() {
    return (
      <div>
        {/*<CurrencyError>
          Germany: <Currency value={21} locale="de-DE" currency="US" />
          USA: <Currency value={21} locale="en-US" currency="USD" />
        </CurrencyError>*/}

        <CurrencyError>
          Germany: <Currency value={21} locale="de-DE" currency="US" />
        </CurrencyError>
        <CurrencyError>
          USA: <Currency value={21} locale="en-US" currency="USD" />
        </CurrencyError>
      </div>
    );
  }
}

export default App;

/* ======== Creating Error Boundaries (Explanation)========== */
//Steps:
// Build a class component with either one or both of
// static getDerivedStateFromError()
//...& componentDidCatch()

//static getDerivedStateFromError()
//May be used to render a UI to user
//To help them understand the error & possbily solve it

//componentDidCatch() method
//May be used to log error information for debugging purposes

//Creating Error boundaries (#1)
//Created component with class

//Creating Error Boundaries (#3)
//Invoked Currency component (Lines: 8 & 9)

//Creating Error Boundaries (#4)
//If we changed currency to an invalid option (US)

//Error:
//RangeError: Invalid currency code: US
//User wouldn't receive that error - they'd receive a blank screen & error would display in the console
//Errors like this cause the entire React component tree to unmount
//The alternative would leave a corrupted application w/ unpredictable results

//Solution:
//Create an error boundry to handle error
//App.js ===> CurrencyError.js

//Creating Error Boundaries (#6)
//Now that we have an error boundary - we can use it in the component tree at whichever point we choose
//Import CurrencyError.js
//Invoke CurrencyError to wrap around currencies

//Scope boundaries (#1) (Lines 9-12)
//We wrapped 2 currency components in an error boundary
//Even though only one component threw an error
//Both components were replaced with error UI

//Scope boundaries (#2) (Lines: 14-19 )
//We can wrap each Currency in its own error boundary

//Result:
//Currency that throws error is replaced with the error UI
//But the currency that didn't throw an error is rendered as normal
//This demonstrates that you have very fine control over how your app handles error that may occur
//Parts of your UI may fail without entire site crashing
