import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import operators from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators)
  // console.log(operatorState.operators)
  return (
    <div className="wrapper-numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

      operatorState.operators.map((button, index) => (
        <OperatorButton key={index} button={button.char} />
      ))}
    </div>
  );
};

export default Operators