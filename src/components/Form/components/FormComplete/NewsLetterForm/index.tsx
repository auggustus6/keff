import { FormDataProps } from "components/Form/types";
import router from "next/router";
import { useState } from "react";

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
  // MailChimp States
  // const [fName, setFName] = useState<string | undefined>("");
  // const [email, setEmail] = useState<string | undefined>("");
  // const [phone, setPhone] = useState<string | undefined>("");
  // Plain States
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

  const handleChangeData = (data: FormDataProps) => {
    setData(data);
  };

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
    // fName &&
    //   email &&
    //   phone &&
    //   email.indexOf("@") > -1 &&
    //   onValidated({
    //     FNAME: fName,
    //     EMAIL: email,
    //     PHONE: phone,
    //   });

    const form = new FormData();
    form.append("Nome", name);
    form.append("Email", email);
    form.append("Telefone", phone);
    form.append("Encapsulados", visited);
    // form.append("Data", format(new Date(), "dd/MM/yyyy"));

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxuBD4OtVlIMuB74bNXNsX9rduKcN2HU0_fdtX7FT1zpo_QLjy_IrcEpG-UlFq5pmGhQg/exec",
        {
          method: "POST",
          body: form,
        },
      );
      resetForm();
      setMessage("Planilha e email enviados com sucesso!");
      router.push("cadastro-sucesso");
    } catch (err) {
      setMessage("Erro ao enviar formulário");
    } finally {
      setLoading(false);
    }
  };

  // const getMessage = (message) => {
  //   if (!message) {
  //     return null;
  //   }
  //   const result = message?.split("-") ?? null;
  //   if ("0" !== result?.[0]?.trim()) {
  //     return decode(message);
  //   }
  //   const formattedMessage = result?.[1]?.trim() ?? null;
  //   return formattedMessage ? decode(formattedMessage) : null;
  // };

  return (
    <div id="mc_embed_signup">
      <form id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
        <div id="mc_embed_signup_scroll">
          <h2>Preencha abaixo para ser atendido!</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">Nome </label>
            <input
              onChange={(e) => setData({ ...data, name: e.target.value })}
              type="text"
              value={name}
              name="FNAME"
              className=""
              id="mce-FNAME"
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              E-mail <span className="asterisk">*</span>
            </label>
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              value={email}
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-PHONE">Celular </label>
            <input
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              type="text"
              name="PHONE"
              className=""
              value={phone}
              id="mce-PHONE"
            />
          </div>

          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Voce trabalha com encapasulado?{" "}
              <span className="asterisk">*</span>
            </label>
            <input
              type="text"
              // value=""
              name="FNAME"
              className=""
              id="mce-FNAME"
            />
          </div>

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
          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                value="Enviar"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                onClick={(e) => handleSubmit(e)}
              />

              {message && <span className="form-status">{message}</span>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
