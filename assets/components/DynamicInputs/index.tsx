import React, { useState } from "react";
import { BtnMakeInput, Container } from "./styles";
import { Input } from "../Guest/Input";
import { faEnvelope, faPlus } from "@fortawesome/pro-thin-svg-icons";
import { FormDynamic } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  setTeam: any
}

export default function DynamicInputs({setTeam}: Props) {
  const [inputs, newInput] = useState([{ email: "" }, { email: "" }]);

  function addOneInput(e: any) {
    e.preventDefault();
    newInput([...inputs, { email: "" }]);
  }

  function handleChange(e: any, index: number) {
    inputs[index].email = e.target.value;
    setTeam([...inputs])
    // console.log(inputs);
  }

  return (
    <Container>
      <FormDynamic>
        {inputs.map((item, index) => {
          return (
            <Input
              key={"email" + index}
              HandleChange={(e: any) => handleChange(e, index)}
              Id={"First" + index}
              Type={"text"}
              Icon={faEnvelope}
              Placeholder={"E-mail do seu colega de trabalho"}
            />
          );
        })}

        <BtnMakeInput onClick={(e) => addOneInput(e)}> <FontAwesomeIcon icon={faPlus} /></BtnMakeInput>
      </FormDynamic>
    </Container>
  );
}
