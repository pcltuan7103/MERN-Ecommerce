import React, { useState } from "react";
import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
  const { placeholder, ...rests } = props
  const [valueInput, setValueInput] = useState('')

  return (
    <div>
      <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests}/>
    </div>
  );
};

export default InputForm;
