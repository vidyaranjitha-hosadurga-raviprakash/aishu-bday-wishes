import React from "react";
import Typist from "react-typist";

function WishMessage(props) {
  const { msg } = props;
  return (
    <>
      <Typist>
        <span>{msg}</span>
      </Typist>
    </>
  );
}
export default WishMessage;
