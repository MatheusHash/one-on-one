import React, { ReactNode } from "react";
import GuestLayout from "../../assets/components/Layouts/GuestLayout/GuestLayout";
import FormularioLogin from "../../assets/components/Guest/FormularioLogin";

// exportando as constantes dos textos e titulos do Header do Layout de Convidado
export const title = "Realize seu Login";
export const text = "Sua alta performance te aguarda no lado da produtividade";
export default function Login() {
  return (
    <FormularioLogin />
  );
}

Login.getLayout = function getLayout(page: ReactNode) {
  return (
    <GuestLayout title={title} text={text}>
      {page}
    </GuestLayout>
  );
};
