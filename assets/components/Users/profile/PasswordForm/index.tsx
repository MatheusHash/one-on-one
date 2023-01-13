import React from "react";
import { Form } from "./styles";
import { Input } from "../../../Input";
import { faLock, faKey } from "@fortawesome/pro-thin-svg-icons";
import { Button } from "../../../Guest/ButtonSubmit/styles";
export default function PasswordForm() {
  return (
    <Form>
      <Input Placeholder={"Senha Atual"} Icon={faKey} />
      <div>
        <Input Placeholder={"Nova Senha"} Icon={faLock} />
        <Input Placeholder={"Confirme a Nova Senha"} Icon={faLock} />
      </div>

      <Button>Trocar Senha</Button>
    </Form>
  );
}
