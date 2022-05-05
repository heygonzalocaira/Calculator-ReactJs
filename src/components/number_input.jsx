import React, { useState } from "react";
import PropTypes from "prop-types";

const NumberInput = ({ name }) => {
  const [numeros, setnumeros] = useState({ numero1: 0, numero2: 0 });

  const handleChange = (e) => {
    setnumeros({ numero1: e.target.value, numero2: e.target.value });
  };
  return (
    <>
      <label>
        {name}: <input onChange={handleChange} type="text" />
      </label>
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;
