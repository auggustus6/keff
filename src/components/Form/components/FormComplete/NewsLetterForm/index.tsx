import { useState } from "react";
import router from "next/router";
import { FormDataProps } from "components/Form/types";
import * as Styles from "./styles";
import InputMask from "react-input-mask";
import { format } from "date-fns";
import axios from "axios";

type NewsLetterFormType = {
  status: any;
  message: string;
  onValidated: any;
};

export const NewsLetterForm = ({
  // status,
  // message,
  onValidated,
}: NewsLetterFormType) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FormDataProps>({
    name: "",
    email: "",
    phone: "",
    visited: "Não",
    investment: "1000 a 5000",
  });

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      phone: "",
      visited: "Sim",
      investment: "",
    });
  };
  const { name, email, phone, visited, investment } = data;

  console.log("value", data);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    name &&
      email &&
      phone &&
      email.indexOf("@") > -1 &&
      onValidated({
        FNAME: name,
        EMAIL: email,
        PHONE: phone,
      });

    const form = new FormData();
    form.append("Nome", name);
    form.append("Email", email);
    form.append("Telefone", phone);
    form.append("Encapsulados", visited);
    form.append("Investimento", investment);
    form.append("Data", format(new Date(), "dd/MM/yyyy"));

    try {
      await axios.post(
        "https://script.google.com/macros/s/AKfycbxuBD4OtVlIMuB74bNXNsX9rduKcN2HU0_fdtX7FT1zpo_QLjy_IrcEpG-UlFq5pmGhQg/exec",
        form,
      );
      await axios.post("/api/contact", data);
      resetForm();
      setMessage("Dados enviados com sucesso!");
      router.push("cadastro-sucesso");
    } catch (err) {
      setMessage("Erro ao enviar formulário");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Styles.Container>
      <h4>
        Essa é a sua oportunidade de empreender com a KEFF, a melhor qualidade
        do mercado com o melhor custo-benefício.
      </h4>
      <h5>Preencha o formulário abaixo para ser atendido!</h5>
      <form id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
        <input
          onChange={(e) => setData({ ...data, name: e.target.value })}
          type="text"
          value={name}
          name="FNAME"
          placeholder="Nome completo"
          className=""
          id="mce-FNAME"
          required
        />

        <input
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="email"
          value={email}
          name="EMAIL"
          placeholder="Email"
          className="required email"
          id="mce-EMAIL"
          required
        />

        <InputMask
          name="PHONE"
          id="mce-PHONE"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          placeholder="Telefone"
          value={phone}
          required
          mask="+55\ 99 9999 99999"
        />
        {/* <span>Quanto você está disposto a investir nesse projeto?</span>
        <select
          required
          value={investment}
          onChange={(e) => setData({ ...data, investment: e.target.value })}
        >
          <option value="1000 a 5000">de R$1.000,00 a R$5.000,00</option>
          <option value="5000 a 10000">de R$5.000,00 a R$10.000,00</option>
          <option value="10000+">mais de R$10.000,00</option>
        </select> */}

        {/* <span>Você já trabalha no mercado de encapsulados?</span>
        <select
          required
          value={visited}
          onChange={(e) => setData({ ...data, visited: e.target.value })}
        >
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select> */}

        <div id="mce-responses" className="clear foot">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          ></div>
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          ></div>
        </div>
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_ed5da9de447f44d3ebe2fcaf6_b1c7d7f33e"
            value=""
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          value="Enviar"
          name="subscribe"
          id="mc-embedded-subscribe"
          onClick={(e) => handleSubmit(e)}
        >
          {loading ? "ENVIANDO..." : "ENVIAR"}
        </button>

        {message && <span className="form-status">{message}</span>}
      </form>
    </Styles.Container>
  );
};
