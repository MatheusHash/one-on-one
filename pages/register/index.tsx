import React, { ReactNode, useState } from "react";
import { RegisterForm } from "../../assets/components/Guest/RegisterForm";
import GuestLayout from "../../assets/components/Layouts/GuestLayout/GuestLayout";

// exportando as constantes dos textos e titulos do Header do Layout de Convidado
export const [title, setTitle] = useState<string>("");
export const text = "Sua alta performance te aguarda no lado da produtividade";

const Home = () => {
  return <RegisterForm />;
};

export default Home;

Home.getLayout = function getLayout(page: ReactNode) {
  return (
    <GuestLayout title={title} text={text}>
      {page}
    </GuestLayout>
  );
};
