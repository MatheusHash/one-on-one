import { faCalendar } from "@fortawesome/pro-thin-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ContainerInputCalendar, InputDate, Label } from "./styles";
import { DateMask } from "../../../util/DateMask";
export default function DateInput() {


  return (
    <ContainerInputCalendar>
      <Label>
        <InputDate
          type="date"
          placeholder="Data do 1ON1"
        />
        <FontAwesomeIcon icon={faCalendar} />
      </Label>
    </ContainerInputCalendar>
  );
}
