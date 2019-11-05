import React from "react";

export const NumberButton = (props) => {
  // console.log(props)
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.numbers};
    </button>
  );
};
