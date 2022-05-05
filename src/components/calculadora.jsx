import React, { useState } from "react";
import NumberInput from "./number_input";
import Resultado from "./resultado";

const Calculadora = () => {
  const [suma, setsuma] = useState(50);

  return (
    <div>
      <NumberInput name={"Numero 1"} />
      <NumberInput name={"Numero 2"} />
      <Resultado operacion="Suma" calculo={suma} />
      <Resultado operacion="Resta" calculo={suma} />
      <Resultado operacion="Multiplicacion" calculo={suma} />
      <Resultado operacion="Division" calculo={suma} />
    </div>
  );
};

export default Calculadora;
