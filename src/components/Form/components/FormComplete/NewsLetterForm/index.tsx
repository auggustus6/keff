import { useState } from "react";
import router from "next/router";
import { FormDataProps } from "components/Form/types";
import * as Styles from "./styles";
import InputMask from "react-input-mask";
import { format } from "date-fns";

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
  });

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      phone: "",
      visited: "Sim",
    });
  };
  const { name, email, phone, visited } = data;

  // const handleChangeData = (data: FormDataProps) => {
  //   setData(data);
  // };

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
    form.append("Data", format(new Date(), "dd/MM/yyyy"));

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxuBD4OtVlIMuB74bNXNsX9rduKcN2HU0_fdtX7FT1zpo_QLjy_IrcEpG-UlFq5pmGhQg/exec",
        {
          method: "POST",
          body: form,
        },
      );
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
      {/* <div id="mc_embed_signup"> */}
      <h4>Agora você pode criar sua própria marca!</h4>
      <form id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
        {/* <div id="mc_embed_signup_scroll"> */}
        {/* <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div> */}
        {/* <div className="mc-field-group"> */}
        {/* <label htmlFor="mce-FNAME">Nome </label> */}
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
        {/* </div> */}
        {/* <div className="mc-field-group"> */}
        {/* <label htmlFor="mce-EMAIL">
                E-mail <span className="asterisk">*</span>
              </label> */}
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
        {/* </div> */}
        {/* <div className="mc-field-group"> */}
        {/* <label htmlFor="mce-PHONE">Celular </label> */}
        {/* <input
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            type="text"
            name="PHONE"
            placeholder="Telefone"
            className=""
            value={phone}
            id="mce-PHONE"
          /> */}
        <InputMask
          name="PHONE"
          id="mce-PHONE"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          placeholder="Telefone"
          value={phone}
          required
          mask="+55\ 99 9999 99999"
        />
        {/* </div> */}

        {/* <div className="mc-field-group"> */}
        {/* <label htmlFor="mce-EMAIL">
                Voce trabalha com encapasulado?{" "}
                <span className="asterisk">*</span> */}
        {/* </label> */}
        {/* <input
                type="text"
                // value=""
                name="FNAME"
                className=""
                id="mce-FNAME"
              /> */}
        <span>Você já trabalha no mercado de encapsulados?</span>
        <select
          required
          value={visited}
          onChange={(e) => setData({ ...data, visited: e.target.value })}
        >
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
        {/* </div> */}

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
        {/* <div className="optionalParent">
          <div className="clear foot"> */}
        {/* <input
              type="submit"
              value="Enviar"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
              onClick={(e) => handleSubmit(e)}
            /> */}

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
        {/* </div>
        </div> */}
        {/* </div> */}
      </form>
      {/* // </div> */}
    </Styles.Container>
  );
};
