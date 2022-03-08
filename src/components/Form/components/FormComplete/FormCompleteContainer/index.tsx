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
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const formMail = {
    MERGE0: data.name,
    MERGE1: data.email,
    MERGE2: data.phone,
  };

  const handleChangeData = (data: FormDataProps) => {
    setData(data);
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      phone: "",
      visited: "Sim",
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    console.log("data fora??", data);
    event.preventDefault();
    // setLoading(true);

    const { name, email, phone, visited } = data;

    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Accept: "application/json",
        // "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
    };

    const form = new FormData();
    form.append("Nome", name);
    form.append("Email", email);
    form.append("Telefone", phone);
    form.append("Encapsulados", visited);
    form.append("Data", format(new Date(), "dd/MM/yyyy"));

    // await axios
    //   .post(
    //     "https://keffbr.us14.list-manage.com/subscribe/post?u=ed5da9de447f44d3ebe2fcaf6&amp;id=b1c7d7f33e",
    //     // "https://keffbr.us14.list-manage.com/subscribe/post?&amp;id=b1c7d7f33e",
    //     {
    //       FNAME: data.name,
    //       EMAIL: data.email,
    //       PHONE: data.phone,
    //     },
    //     options,
    //   )
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => {
    //     setMessage("Erro ao enviar formulário", err);
    //   });

    try {
      await fetch(
        "https://keffbr.us14.list-manage.com/subscribe/post?u=ed5da9de447f44d3ebe2fcaf6&amp;id=b1c7d7f33e",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formMail),
        },
      );
      setMessage("Formulário enviado com sucesso!");
    } catch (err) {
      setMessage("Erro ao enviar formulário");
    } finally {
      setLoading(false);
    }

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
