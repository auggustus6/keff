import { FormDataProps } from "../../../types";
import { useEffect, useState } from "react";
import axios from "axios";
import { FormCompleteView } from "../index";
import { useRouter } from "next/router";
import { format } from "date-fns";

export const FormCompleteContainer = () => {
  const router = useRouter();
  const [data, setData] = useState<FormDataProps>({
    name: "",
    email: "",
    phone: "",
    visited: "Não",
    investment: "1000 a 5000",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeData = (data: FormDataProps) => {
    setData(data);
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      phone: "",
      visited: "Sim",
      investment: "",
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    console.log("data fora??", data);
    event.preventDefault();
    // setLoading(true);

    const { name, email, phone, visited, investment } = data;

    const form = new FormData();
    form.append("Nome", name);
    form.append("Email", email);
    form.append("Telefone", phone);
    form.append("Encapsulados", visited);
    form.append("Investimento", investment);
    form.append("Data", format(new Date(), "dd/MM/yyyy"));

    // try {
    //   await fetch(
    //     "https://script.google.com/macros/s/AKfycbxuBD4OtVlIMuB74bNXNsX9rduKcN2HU0_fdtX7FT1zpo_QLjy_IrcEpG-UlFq5pmGhQg/exec",
    //     {
    //       method: "POST",
    //       body: form,
    //     },
    //   );
    //   resetForm();
    //   setMessage("Formulário enviado com sucesso!");
    //   router.push("cadastro-sucesso");
    // } catch (err) {
    //   setMessage("Erro ao enviar formulário");
    // } finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    let _mounted = true;
    if (message && _mounted) {
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }

    return () => {
      _mounted = false;
    };
  }, [message]);

  return (
    <FormCompleteView
      data={data}
      loading={loading}
      onSubmit={handleSubmit}
      message={message}
      handleChangeData={handleChangeData}
    />
  );
};
